import actionTypes from '../actions/actionTypes';

const {
	CREATE_POST,
	DELETE_POST,
	GET_POST_BY_ID
} = actionTypes;

const posts = (state = { content: [] }, action) => {
	const { content } = state;
	const { type, payload } = action;

	switch (type) {
	case CREATE_POST:
		return {
			...state,
			content: [payload, ...content]
		};

	case DELETE_POST:
		return {
			...state,
			content: content.filter(post => post.id !== payload.id)
		};

	case GET_POST_BY_ID:
		return content.find(post => post.id === payload.id);

	default:
		return state;
	}
};

export default posts;
