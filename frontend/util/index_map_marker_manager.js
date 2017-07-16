/* global google:false */

class IndexMapMarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(businesses){
    const businessesObj = {};
    businesses.forEach(business => businessesObj[business.id] = business);

    businesses
      .filter(business => !this.markers[business.id])
      .forEach((newBusiness, idx) => this.createMarkerFromBusiness(newBusiness, idx));

    Object.keys(this.markers)
      .filter(businessId => !businessesObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]));

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
      fontFamily: 'Helvetica Neue',
    });
  }

  hoverLabel(text) {
    return({
      text: text,
      color: 'red',
      fontFamily: 'Helvetica Neue',
      fontWeight: 'bold',
    });
  }

  handleMouseover(marker) {
    marker.setIcon(this.hoverIcon());
    marker.setLabel(this.hoverLabel(marker.text));
  }

  handleMouseout(marker) {
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
    marker.addListener('mouseover', () => this.handleMouseover(marker));
    marker.addListener('mouseout', () => this.handleMouseout(marker));
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default IndexMapMarkerManager;
