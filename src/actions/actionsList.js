import actionTypes from './actionTypes';

export const VisiblePosts = {
	SHOW_ALL_POSTS: actionTypes.SHOW_ALL_POSTS,
};

export const GetPostById = id => ({
	type: actionTypes.GET_POST_BY_ID,
	payload: {
		id
	}
});

export const CreatePost = (content) => {
	const currDate = Date.now(); // !!!

	return ({
		type: actionTypes.CREATE_POST,
		payload: {
			...content,
			createdAt: currDate,
			id: `postID_${currDate}`,
			comments: [],
			likes: [],
			dislikes: [],
			img: 'https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif' // !!!
		}
	});
};

export const DeletePost = id => ({
	type: actionTypes.DELETE_POST,
	payload: {
		id
	}
});

export const RatePost = (id, liked) => ({
	type: liked 
		? actionTypes.LIKE_POST
		: actionTypes.DISLIKE_POST,
	payload: {
		id
	}
});
