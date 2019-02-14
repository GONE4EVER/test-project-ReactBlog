import { connect } from 'react-redux';
import PostsList from '../components/PostsList';


const getVisiblePosts = (posts, filter) => {
	if (filter) { return posts.filter(post => post.categoryId === filter); }
	return posts;
};

const mapStateToProps = state => ({
	posts: getVisiblePosts(state.posts.content, state.categories.currentCategory)
});


export default connect(
	mapStateToProps
)(PostsList);
