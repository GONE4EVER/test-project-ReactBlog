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

export const ShowPostsByCategory = filter => ({
	type: actionTypes.SHOW_POSTS_BY_CATEGORY,
	payload: {
		filter
	}
});

export const CreatePost = content => ({
	type: actionTypes.CREATE_POST,
	payload: {
		...content,
		createdAt: Date.now()
	}
});
