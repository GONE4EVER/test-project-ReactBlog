import actionTypes from '../actions/actionTypes';

const {
	SHOW_POSTS_BY_CATEGORY,
	SHOW_ALL_CATEGORIES,
	CREATE_CATEGORY,
	DELETE_CATEGORY,
} = actionTypes;

const categories = (state = [], action) => {
	const { content } = state;

	switch (action.type) {
	case SHOW_ALL_CATEGORIES:
		return state;

	case SHOW_POSTS_BY_CATEGORY:
		const newCategory = content.find(category => category.id === action.filter);

		return {
			...state,
			currentCategory: newCategory ? newCategory.id : null
		};

		// !!!
	case CREATE_CATEGORY:
		return {
			...state,
			id: action.id
		};

		// !!!
	case DELETE_CATEGORY:
		return state.reduce((acc, category) => {
			if (category.id !== action.id) { acc.push(category); }
		}, []);

	default:
		return state;
	}
};

export default categories;
