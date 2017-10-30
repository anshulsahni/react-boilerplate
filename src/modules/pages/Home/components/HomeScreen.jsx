import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchRandomUserDetails();
  }

  renderUserDetails = () => {
    const { title, first, last } = this.props.user.name;
    return (
      <div className="user-details">
        Random User loaded is: {`${title} ${first} ${last}`}
      </div>
    );
  }
  render() {
    const {
      loading,
      user,
      error,
    } = this.props;

    return (
      <div className="home-screen">
        {loading && <div className="pre-loader">Loading...</div>}
        {user.name && this.renderUserDetails()}
        {error && <div className="error">Unexpected Error Occured Please reload</div>}
      </div>
    );
  }
}

HomeScreen.propTypes = {
  fetchRandomUserDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  user: shape({
    name: shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
  }),
  error: PropTypes.string,
};

HomeScreen.defaultProps = {
  fetchRandomUserDetails: () => {},
  loading: false,
  user: {},
  error: '',
};

export default HomeScreen;
