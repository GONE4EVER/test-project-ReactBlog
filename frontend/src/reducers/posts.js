import actionTypes from '../actions/actionTypes';

const {
	CREATE_POST,
	DELETE_POST,
	GET_POST_BY_ID,
	LIKE_POST,
	DISLIKE_POST
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

		case LIKE_POST: // !!! to be changed 
			return {
				...state,
				content: content.reduce((acc, post) => {
					acc.push({
						...post,
						likes: post.id !== payload.id
							? post.likes
							: [...post.likes, 'tipa id']
					});
					return acc;
	
				}, [])
			}
			
		case DISLIKE_POST: // !!! to be changed 
			return {
				...state,
				content: content.reduce((acc, post) => {
					acc.push({
						...post,
						dislikes: post.id !== payload.id
							? post.dislikes
							: [...post.dislikes, 'tipa id']
					});
					return acc;
	
				}, [])
			}	

		default:
			return state;
	}
};

export default posts;
