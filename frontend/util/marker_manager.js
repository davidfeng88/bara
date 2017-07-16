/* global google:false */

class MarkerManager {
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

  createMarkerFromBusiness(business, idx) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id,
      label: (idx+1).toString(),
    });

    marker.addListener('click', () => this.handleClick(business));
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;
