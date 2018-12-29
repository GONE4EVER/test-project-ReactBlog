import { connect } from 'react-redux';
import { VisiblePosts } from '../actions';
import PostsList from '../components/PostsList';

const getVisiblePosts = (posts, filter) => {
	if (filter) { return posts.filter(post => post.categoryID === filter); }
	return posts;
};

const mapStateToProps = state => ({
	posts: getVisiblePosts(state.posts, state.categories.currentCategory)
});


export default connect(
	mapStateToProps
)(PostsList);
