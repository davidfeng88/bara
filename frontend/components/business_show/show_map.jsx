import React from 'react';

export default class ShowMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    let { business } = this.props;
    let { lat, lng } = business;
    const mapOptions = {
      center: {
        lat: lat,
        lng: lng
      }, // Business coords
      zoom: 14,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(map, mapOptions);
    const position = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
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
