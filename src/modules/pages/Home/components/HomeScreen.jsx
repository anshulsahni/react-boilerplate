import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchRandomUserDetails();
  }

  render() {
    return (
      <div>{this.props.loading}</div>
    );
  }
}

HomeScreen.propTypes = {
  fetchRandomUserDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

HomeScreen.defaultProps = {
  loading: false,
};

export default HomeScreen;
