import { postActions } from './actionTypes';
import routes from '../App/routeNames';

export const getPostById = id => ({
	type: postActions.GET_POST_BY_ID,
	payload: {
		id
	}
});

export const createPost = ([content, {current, history}]) => {
	const currDate = Date.now();
	history.push(`${routes.MAIN}/${current || ''}`);

	return ({
		type: postActions.CREATE_POST,
		payload: {
			...content,
			createdAt: currDate,
			id: `postID_${currDate}`,
			comments: [],
			likes: [],
			dislikes: [],
			img: '',
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
