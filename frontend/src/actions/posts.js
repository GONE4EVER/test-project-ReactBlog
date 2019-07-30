import { postActions } from './actionTypes';


export const getPostById = id => ({
	type: postActions.GET_POST_BY_ID,
	payload: {
		id
	}
});

export const createPost = (content) => {
	const currDate = Date.now(); // !!!

	return ({
		type: postActions.CREATE_POST,
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

export const deletePost = id => ({
	type: postActions.DELETE_POST,
	payload: {
		id
	}
});

export const ratePost = (id, liked) => ({
	type: liked
		? postActions.LIKE_POST
		: postActions.DISLIKE_POST,
	payload: {
		id
	}
});

export const fetchPosts = () => ({
	type: postActions.FETCHING_POSTS
});

export const fetchPostsSuccess = () => ({
	type: postActions.FETCHING_POSTS_SUCCEDED
});

export const fetchPostsFail = () => ({
	type: postActions.FETCHING_POSTS_FAILED
});
