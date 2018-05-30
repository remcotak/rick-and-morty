import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Locations.css';

class Locations extends Component {
  render() {
    return <p>Locations</p>;
  }
}

export default connect(
  state => ({
    isFetching: state.characters.isFetching
  }),
  {}
)(Locations);
