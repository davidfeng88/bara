import React from 'react';
import ReactDOM from 'react-dom';

import MarkerManager from '../../util/marker_manager';

class ShowMap extends React.Component {

  componentDidMount() {
    this.configureMap();
    const map = this.refs.map;
    if (map && this.map) {
      // map is the map div, and this.map is the google map component
      this.MarkerManager.updateMarkers([this.props.business]);
    }
  }

  configureMap() {
    const map = this.refs.map;
    if (map && !this.map) {
      // if the map div is mounted, but there is no google map component
      let { business } = this.props;
      const mapOptions = {
        center: {
          lat: business.lat,
          lng: business.lng
        }, // Business coords
        zoom: 14
      };
    this.map = new google.maps.Map(map, mapOptions);
    const position = new google.maps.LatLng(business.lat, business.lng);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    }
  }

  componentDidUpdate() {
    this.configureMap();
    const map = this.refs.map;
    if (map && this.map) {
      this.MarkerManager.updateMarkers([this.props.business]);
    }
  }

  handleMarkerClick(business) {}

  render() {
    const { business: { lat, lng } } = this.props;
    //  if the business has lat&lng, render the map div
    return (lat && lng) ? (
      <div className="show-map" ref="map">
        Map
      </div>
    ) : (
      <div></div>
    );
  }

}

export default ShowMap;
