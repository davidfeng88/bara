import React from 'react';

export default class FormMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    if (this.props.formType === 'createBusiness') {
      let mapOptions = {
        center: {
          lat: 40.712775,
          lng: -74.006182
        }, // NYC City Hall Coordinates
        zoom: 15,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT,
        },
      };
      this.map = new google.maps.Map(map, mapOptions);
    } else {
      let { lat, lng } = this.props;
      let mapOptions = {
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
  }

  render() {
    return (
      <div className="form-map-wrapper">
        <div className="form-map" ref="map">
          Map
        </div>
      </div>
    );
  }
}
