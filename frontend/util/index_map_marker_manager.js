/* global google:false */

class IndexMapMarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

  }

  updateHighlight(oldHighlight, newHighlight) {
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

    // if the user does not search again, just toggle highlight,
    // then lazy update is enough

    // const businessesObj = {};
    // businesses.forEach(business => businessesObj[business.id] = business);
    // businesses
    //   .filter(business => !this.markers[business.id])
    //   .forEach((newBusiness, idx) => this.createMarkerFromBusiness(newBusiness, idx));
    //
    // Object.keys(this.markers)
    //   .filter(businessId => !businessesObj[businessId])
    //   .forEach((businessId) => this.removeMarker(this.markers[businessId]));

    //adjust map bounds when the search result is not empty
    if (businesses.length > 0) {
      let markersArray = Object.values(this.markers);
      let bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < markersArray.length; i++) {
        bounds.extend(markersArray[i].getPosition());
      }
      this.map.fitBounds(bounds);
      if (this.map.getZoom() > 16) {
        this.map.setZoom(16);
      }
    }
  }

  normalIcon() {
    return({
      url: window.staticImages.normalIcon,
      labelOrigin: new google.maps.Point(11, 10),
    });
  }

  hoverIcon() {
    return({
      url: window.staticImages.hoverIcon,
      labelOrigin: new google.maps.Point(11, 10),
    });
  }

  normalLabel(text) {
    return({
      text: text,
      color: 'white',
      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      fontWeight: 'bold',
    });
  }

  hoverLabel(text) {
    return({
      text: text,
      color: 'red',
      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      fontWeight: 'bold',
    });
  }

  handleMouseOver(marker) {
    marker.setIcon(this.hoverIcon());
    marker.setLabel(this.hoverLabel(marker.text));
  }

  handleMouseOut(marker) {
    marker.setIcon(this.normalIcon());
    marker.setLabel(this.normalLabel(marker.text));
  }

  createMarkerFromBusiness(business, idx) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      text: (idx+1).toString(),
      position,
      map: this.map,
      businessId: business.id,
      icon: this.normalIcon(),
      label: this.normalLabel((idx+1).toString()),
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

export default IndexMapMarkerManager;
