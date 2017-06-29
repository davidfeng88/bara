import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';
//
// const getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });
//



class ShowMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
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

    // if (this.props.singleBusiness) {
    //   this.props.fetchBusiness(this.props.businessId);
    // } else {
    //   this.registerListeners();
    //   this.MarkerManager.updateMarkers(this.props.businesses);
    // }
  }
//
  componentDidUpdate() {
  //   // if (this.props.singleBusiness) {
  //   //   const targetBusinessKey = Object.keys(this.props.businesses)[0];
  //   //   const targetBusiness = this.props.businesses[targetBusinessKey];
  //   //   this.MarkerManager.updateMarkers([targetBusiness]); //grabs only that one business
  //   // } else {
      this.MarkerManager.updateMarkers([this.props.business]);
  //   // }
  }

  componentWillReceiveProps(newProps) {
  //   // if (this.props.singleBusiness) {
  //   //   const targetBusinessKey = Object.keys(this.props.businesses)[0];
  //   //   const targetBusiness = this.props.businesses[targetBusinessKey];
  //   //   this.MarkerManager.updateMarkers([targetBusiness]); //grabs only that one business
  //   // } else {
      this.MarkerManager.updateMarkers([newProps.business]);
  //   // }
  }
//
//   registerListeners() {
//     google.maps.event.addListener(this.map, 'idle', () => {
//       const { north, south, east, west } = this.map.getBounds().toJSON();
//       const bounds = {
//         northEast: { lat:north, lng: east },
//         southWest: { lat: south, lng: west } };
//       this.props.updateFilter('bounds', bounds);
//     });
//     google.maps.event.addListener(this.map, 'click', (event) => {
//       const coords = getCoordsObj(event.latLng);
//       this.handleClick(coords);
//     });
//   }
//
  handleMarkerClick(business) {

  }

  render() {
    return (
      <div className="show-map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(ShowMap);
