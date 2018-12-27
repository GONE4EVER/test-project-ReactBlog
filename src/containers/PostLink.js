import { connect } from 'react-redux';
import { GetPostById, ShowPostsByCategory } from '../actions';
import Post from '../components/Post';

/* const mapStateToProps = state => ({
  postContent: 
}) */

const mapDispatchToProps = dispatch => ({
	onHeaderClick: id => {
		dispatch(ShowPostsByCategory(id))
	}
});

export default connect(
	mapDispatchToProps
)(Post);
