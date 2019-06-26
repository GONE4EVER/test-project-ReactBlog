import { connect } from 'react-redux';
import SelectCategory from '../components/SelectCategory';

const mapStateToProps = state => ({
	categories: state.categories
});

export default connect(
	mapStateToProps,
)(SelectCategory);
