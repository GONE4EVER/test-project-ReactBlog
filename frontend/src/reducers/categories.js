import { categoryActions } from '../actions/actionTypes';

const {
	SHOW_ALL_CATEGORIES,
	CREATE_CATEGORY,
	DELETE_CATEGORY,
	SWITCH_CURR_CATEGORY,
} = categoryActions;

const categories = (state = { content: [], current: null }, action) => {
	const { type, payload } = action;
	const { content } = state;

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
				? content.find(category => category.id === payload.id).id
				: ''
		};

	default:
		return state;
	}
};

export default categories;
