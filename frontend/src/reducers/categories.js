import { categoryActions } from '../actions/actionTypes';

const {
	SHOW_ALL_CATEGORIES,
	CREATE_CATEGORY,
	DELETE_CATEGORY,
	SWITCH_CURR_CATEGORY,
} = categoryActions;

const DEFAULT_VALUE = '';

const categories = (state = { content: [], current: null }, action) => {
	const { type, payload } = action;
	const { content } = state;

	const checkIfCategoryExists = (categoryId) => {
		const result = content.find(category => category.id === categoryId);
		return result ? result.id : DEFAULT_VALUE;
	};

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
		return content.filter(category => category.id !== payload.id);

	case SWITCH_CURR_CATEGORY:
		return {
			...state,
			current: payload.id
				? checkIfCategoryExists(payload.id)
				: DEFAULT_VALUE
		};

	default:
		return state;
	}
};

export default categories;
