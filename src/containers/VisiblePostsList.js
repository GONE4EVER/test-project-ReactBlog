import { connect } from 'react-redux';
import { VisiblePosts } from '../actions';
import PostsList from '../components/PostsList';

const getVisiblePosts = (posts, filter = VisiblePosts.SHOW_ALL) => {
	switch (filter) {
		case VisiblePosts.SHOW_POSTS_BY_CATEGORY:
			return posts.filter(post => post.categoryID === filter.id);
		default:
			return posts;
	}
};

const mapStateToProps = state => ({
	posts: getVisiblePosts(state.posts, state.currentCategory)
});


export default connect(
	mapStateToProps
)(PostsList);
