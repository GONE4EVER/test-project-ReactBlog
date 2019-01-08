import actionTypes from '../actions/actionTypes';

const {
	CREATE_POST,
	DELETE_POST,
	GET_POST_BY_ID
} = actionTypes;

const posts = (state = { content: [] }, action) => {
	const { content } = state;

	switch (action.type) {
	// !!!
	case CREATE_POST:
		return {
			...state
		};

	case DELETE_POST:
		return content.filter(post => post.id !== action.id);

	case GET_POST_BY_ID:
		return content.find(post => post.id === action.id);

	default:
		return state;
	}
};

export default posts;
