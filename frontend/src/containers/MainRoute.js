import { connect } from 'react-redux';
import { switchCurrentCategory } from 'Actions/categories';

import MainRoute from 'Routes/MainRoute';

const mapStateToProps = state => ({
	categories: state.categories.content,
	current: state.categories.current
});

const mapDispatchToProps = dispatch => ({
	setCategory: (history, current) => dispatch(switchCurrentCategory({ history, value: current }))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainRoute);
