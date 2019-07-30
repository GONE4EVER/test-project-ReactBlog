import { postActions } from '../actions/actionTypes';

const {
	CREATE_POST,
	DELETE_POST,
	GET_POST_BY_ID,
	LIKE_POST,
	DISLIKE_POST,
	FETCHING_POSTS
} = postActions;


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

	case LIKE_POST: // !!! to be changed
		return {
			...state,
			content: content.map(post => (
				post.id === payload.id
					? { ...post, likes: [...post.likes, 'tipa_user_id'] }
					: post
			))
		};

	case DISLIKE_POST: // !!! to be changed
		return {
			...state,
			content: content.map(post => (
				post.id === payload.id
					? { ...post, dislikes: [...post.dislikes, 'tipa_user_id'] }
					: post
			))
		};

		/* case FETCHING_POSTS: */

	default:
		return state;
	}
};

export default posts;
