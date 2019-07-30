import { connect } from 'react-redux';
import { createPost } from '../actions/posts';
import Form from '../components/CreatePostForm';


const mapStateToProps = state => ({
	categories: state.categories.content
});

const mapDispatchToProps = dispatch => ({
	createPost: content => dispatch(createPost(content))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
