import React from 'react';
import PropTypes from 'prop-types';

export default class ShowMap extends React.Component {
  componentDidMount = () => {
    const map = this.mapDiv;
    const {
      lat,
      lng,
    } = this.props.business;
    const mapOptions = {
      center: {
        lat,
        lng,
      },
      zoom: 14,
      disableDefaultUI: true,
    };
    this.map = new window.google.maps.Map(map, mapOptions);
    const position = new window.google.maps.LatLng(lat, lng);
    const marker = new window.google.maps.Marker({
      position,
      icon: {
        url: window.staticImages.normalIcon,
      },
    });
    marker.setMap(this.map);
  };

  render = () => (
    <div
      className="show-map"
      ref={
        (div) => {
          this.mapDiv = div;
        }
      }
    >
      Map
    </div>
  );
}

ShowMap.propTypes = {
  business: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

ShowMap.defaultProps = {
  business: {
    lat: 0,
    lng: 0,
  },
};
