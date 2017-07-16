import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import IndexMapMarkerManager from '../../util/index_map_marker_manager';

const mapOptions = {
  center: {
    lat: 40.732663,
    lng: -73.993479
  }, // NYC coords
  zoom: 12
};

class IndexMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.IndexMapMarkerManager = new IndexMapMarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.IndexMapMarkerManager.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    this.IndexMapMarkerManager.updateMarkers(this.props.businesses);
  }

  handleMarkerClick(business) {
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
