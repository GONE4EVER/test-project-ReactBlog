import actionTypes from '../actions/actionTypes';

const {
	SHOW_POSTS_BY_CATEGORY,
	SHOW_ALL_CATEGORIES,
	CREATE_CATEGORY,
	DELETE_CATEGORY,
} = actionTypes;

const categories = (state = { content: [], currentCategory: null }, action) => {
	const { content } = state;
	const { type, payload } = action;

	switch (type) {
	case SHOW_ALL_CATEGORIES:
		return state;

	case SHOW_POSTS_BY_CATEGORY:
		const newCategory = content.find(category => category.id === payload.filter);

		return {
			...state,
			currentCategory: newCategory ? newCategory.id : null
		};

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
