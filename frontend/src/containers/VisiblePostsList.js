import { connect } from 'react-redux';
import PostsList from '../components/PostsList';


const getVisiblePosts = (posts, categories, match) => {
	const { categoryId } = match.params;
	const currCategory = categories.find(category => category.id === categoryId);

	return currCategory ? posts.filter(post => post.categoryId === currCategory.id) : posts;
};

const mapStateToProps = (state, ownProps) => ({
	posts: getVisiblePosts(state.posts.content, state.categories.content, ownProps),
});


export default connect(
	mapStateToProps,
)(PostsList);
