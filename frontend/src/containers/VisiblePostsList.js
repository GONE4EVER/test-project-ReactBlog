import { connect } from 'react-redux';
import PostsList from 'Components/PostsList';


const getVisiblePosts = (
	posts,
	{ content, current },
	{ params: { categoryId } }
) => {
	const id = current || categoryId;

	const currCategory = content.find(category => category.id === id);

	return currCategory ? posts.filter(post => post.categoryId === currCategory.id) : posts;
};

const mapStateToProps = (state, ownProps) => ({
	posts: getVisiblePosts(state.posts.content, state.categories, ownProps),
});


export default connect(
	mapStateToProps,
)(PostsList);
