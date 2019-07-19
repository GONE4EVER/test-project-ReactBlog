import { connect } from 'react-redux';
import { RatePost } from '../actions';

import Likes from '../components/Post/Likes';


const mapDispatchToProps = dispatch => ({
  ratePost: (id, mark) => dispatch(RatePost(id, mark))
});

export default connect(
  null,
  mapDispatchToProps
)(Likes);