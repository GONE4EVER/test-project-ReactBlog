import { connect } from 'react-redux';

import PostDetails from '../components/PostRoute/PostDetails';

const getPostDetails = (posts, { match }) => {
  const { postId } = match.params;
  const selectedPost = posts.find(post => post.id === postId);

  return selectedPost || null;
}

const mapStateToProps = (state, ownProps) => ({
  selectedPost: getPostDetails(state.posts.content, ownProps)
});

export default connect(
  mapStateToProps
)(PostDetails);