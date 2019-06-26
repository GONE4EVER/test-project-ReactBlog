import { connect } from 'react-redux';
import { DeletePost } from '../actions';

import ManagePostsTable from '../components/ManagePostsTable';


const mapStateToProps = state => ({
	posts: state.posts.content
});

const mapDispatchToProps = dispatch => ({
	deletePost: id => dispatch(DeletePost(id))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ManagePostsTable);
