import { connect } from 'react-redux';
import { createPost } from 'Actions/posts';
import Form from '../components/CreatePostForm';


const mapStateToProps = state => ({
	categories: state.categories.content,
	current: state.categories.current
});

const mapDispatchToProps = dispatch => ({
	createPost: (...args) => dispatch(createPost(args))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
