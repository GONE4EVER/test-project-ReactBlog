import { connect } from 'react-redux';
import { deletePost } from '../actions/posts';

import ManagePostsTable from '../components/ManagePostsTable';


const mapStateToProps = state => ({
	posts: state.posts.content
});

const mapDispatchToProps = dispatch => ({
	deletePost: id => dispatch(deletePost(id))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ManagePostsTable);
