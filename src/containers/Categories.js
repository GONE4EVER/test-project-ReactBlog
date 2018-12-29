import { connect } from 'react-redux';
import SelectCategory from '../components/SelectCategory';
import { ShowPostsByCategory } from '../actions';

const mapStateToProps = state => ({
	categories: state.categories.content
});

const mapDispatchToProps = dispatch => ({
	switchVisibility: categoryID => dispatch(ShowPostsByCategory(categoryID))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectCategory);
