import actionTypes from './actionTypes';

export const VisiblePosts = {
	SHOW_ALL_POSTS: actionTypes.SHOW_ALL_POSTS,
};

export const GetPostById = id => ({
	type: actionTypes.GET_POST_BY_ID,
	id
});

export const ShowPostsByCategory = filter => ({
	type: actionTypes.SHOW_POSTS_BY_CATEGORY,
	filter
});
