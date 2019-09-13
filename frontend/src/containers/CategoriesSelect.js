import { connect } from 'react-redux';
import SelectCategory from 'Components/SelectCategory';
import { switchCurrentCategory } from 'Actions/categories';

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
