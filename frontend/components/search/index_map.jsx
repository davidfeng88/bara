import React from 'react';
import { withRouter } from 'react-router-dom';
import IndexMapMarkerManager from './index_map_marker_manager';

class IndexMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: {
        lat: 40.732663,
        lng: -73.993479
      }, // NYC coords
      zoom: 12,
      maxZoom: 16,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
      },
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.IndexMapMarkerManager = new IndexMapMarkerManager(this.map, this.handleClick.bind(this));
    this.IndexMapMarkerManager.updateMarkers(this.props.businesses);
  }

  componentDidUpdate(prevProps) {
    if (this.props.highlight !== prevProps.highlight) {
      this.IndexMapMarkerManager
        .updateHighlight(prevProps.highlight, this.props.highlight);
    } else {
      this.IndexMapMarkerManager.updateMarkers(this.props.businesses);
    }
  }

  handleClick(business) {
    this.props.history.push(`/businesses/${business.id}`);
  }

  render() {
    return (
      <div className="index-map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(IndexMap);
