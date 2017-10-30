import { connect } from 'react-redux';

import { fetchUser } from './actions';

import HomeScreen from './components/HomeScreen';

const mapStateToProps = ({ home: { networkBusy: loading, user, error } }) => ({
  loading, user, error,
});

const mapDispatchToProps = dispatch => ({
  fetchRandomUserDetails: () => {
    dispatch(fetchUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
