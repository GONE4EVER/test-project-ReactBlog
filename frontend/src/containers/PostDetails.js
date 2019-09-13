import { connect } from 'react-redux';

import PostDetails from 'Routes/PostRoute/PostDetails';

const getPostDetails = (posts, { match }) => {
	const { postId } = match.params;
	const selectedPost = posts.find(post => post.id === postId) || null;

	return selectedPost;
};

const mapStateToProps = (state, ownProps) => ({
	selectedPost: getPostDetails(state.posts.content, ownProps)
});

export default connect(
	mapStateToProps
)(PostDetails);
