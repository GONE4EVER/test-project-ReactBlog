import actionTypes from '../actions/actionTypes';

const {
	SHOW_ALL_CATEGORIES,
	CREATE_CATEGORY,
	DELETE_CATEGORY,
} = actionTypes;

const categories = (state = { content: [], currentCategory: null }, action) => {
	const { type, payload } = action;

	switch (type) {
	case SHOW_ALL_CATEGORIES:
		return state;

		// !!!
	case CREATE_CATEGORY:
		return {
			...state,
			id: payload.id
		};

		// !!!
	case DELETE_CATEGORY:
		return state.filter(category => category.id !== payload.id);

	default:
		return state;
	}
};

export default categories;
