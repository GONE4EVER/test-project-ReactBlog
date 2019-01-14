import { connect } from 'react-redux';
import { CreatePost } from '../actions';
import CreatePostRoute from '../components/CreatePostRoute/CreatePostRoute';

const mapStateToProps = state => ({
	categories: state.categories.content
});

const mapDispatchToProps = dispatch => ({
	createPost: content => dispatch(CreatePost(content))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePostRoute);
