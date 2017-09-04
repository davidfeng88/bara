/* global google:false */
const normalLabel = text => ({
  text: text,
  color: 'white',
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
});

const hoverLabel = text => ({
  text: text,
  color: 'red',
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontWeight: 'bold',
});

export default class IndexMapMarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.normalIcon = {
      url: window.staticImages.normalIcon,
      labelOrigin: new google.maps.Point(11, 10),
    };
    this.hoverIcon = {
      url: window.staticImages.hoverIcon,
      labelOrigin: new google.maps.Point(11, 10),
    };
  }

  handleMouseOver(marker) {
    marker.setIcon(this.hoverIcon);
    marker.setLabel(hoverLabel(marker.text));
  }

  handleMouseOut(marker) {
    marker.setIcon(this.normalIcon);
    marker.setLabel(normalLabel(marker.text));
  }

  updateHighlight(oldHighlight, newHighlight) {
    // after user delete oldHighlight
    if (oldHighlight !== -1) {
      this.handleMouseOut(this.markers[oldHighlight]);
    }
    if (newHighlight !== -1) {
      this.handleMouseOver(this.markers[newHighlight]);
    }
  }

  updateMarkers(businesses){
    // aggressively update all markers
    // (filter change may change idx, even though marker is always on)
    Object.keys(this.markers)
      .forEach((businessId) => this.removeMarker(this.markers[businessId]));
    businesses
      .forEach((business, idx) => this.createMarkerFromBusiness(business, idx));

    //adjust map bounds when the search result is not empty
    if (businesses.length > 0) {
      let markersArray = Object.values(this.markers);
      let bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < markersArray.length; i++) {
        bounds.extend(markersArray[i].getPosition());
      }
      this.map.fitBounds(bounds);
    }
  }

  createMarkerFromBusiness(business, idx) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      text: (idx+1).toString(),
      position,
      map: this.map,
      businessId: business.id,
      icon: this.normalIcon,
      label: normalLabel((idx+1).toString()),
    });

    marker.addListener('click', () => this.handleClick(business));
    marker.addListener('mouseover', () => this.handleMouseOver(marker));
    marker.addListener('mouseout', () => this.handleMouseOut(marker));
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}
