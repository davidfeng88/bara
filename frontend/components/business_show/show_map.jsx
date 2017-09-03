import React from 'react';

export default class ShowMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    let { business } = this.props;
    const mapOptions = {
      center: {
        lat: business.lat,
        lng: business.lng
      }, // Business coords
      zoom: 14,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(map, mapOptions);
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id,
      icon: {
        url: window.staticImages.normalIcon,
      }
    });
  }

  render() {
    return (
      <div className="show-map" ref="map">
        Map
      </div>
    );
  }
}
