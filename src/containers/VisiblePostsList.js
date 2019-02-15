import { connect } from 'react-redux';
import PostsList from '../components/PostsList';


const getVisiblePosts = (posts, categories, match) => {
	const currCategory = categories.find(category => category.id === match.params.categoryId);

	if (currCategory) {
		return posts.filter(post => post.categoryId === currCategory.id);
	}
	return posts;
};

const mapStateToProps = (state, ownProps) => ({
	posts: getVisiblePosts(state.posts.content, state.categories.content, ownProps),
});


export default connect(
	mapStateToProps,
)(PostsList);
