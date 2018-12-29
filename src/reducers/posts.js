import actionTypes from '../actions/actionTypes';

const {
	CREATE_POST,
	DELETE_POST,
	GET_POST_BY_ID
} = actionTypes;

const posts = (state = [], action) => {
	switch (action.type) {
	case CREATE_POST:
		return {
			...state,
			id: action.id
		};

	case DELETE_POST:
		return state.reduce((acc, post) => {
			if (post.id !== action.id) { acc.push(post); }
			return acc;
		}, []);

	case GET_POST_BY_ID:
		return state.find(post => post.id === action.id);

	default:
		return state;
	}
};

export default posts;
