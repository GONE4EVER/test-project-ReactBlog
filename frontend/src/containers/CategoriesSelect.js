import { connect } from 'react-redux';
import SelectCategory from '../components/SelectCategory';
import { switchCurrentCategory } from '../actions/categories';

const mapStateToProps = state => ({
	categories: state.categories
});

const mapDispachToProps = dispatch => ({
	switchCurrCategory: props => dispatch(switchCurrentCategory(props))
});

export default connect(
	mapStateToProps,
	mapDispachToProps
)(SelectCategory);
