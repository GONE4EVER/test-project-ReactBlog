import { connect } from 'react-redux';
import { ratePost } from '../actions/posts';

import Likes from '../components/Post/Likes';


const mapDispatchToProps = dispatch => ({
	ratePost: (id, mark) => dispatch(ratePost(id, mark))
});


export default connect(
	null,
	mapDispatchToProps
)(Likes);
