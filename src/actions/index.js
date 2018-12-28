import actionTypes from './actionTypes';

export const VisiblePosts = {
	SHOW_ALL_POSTS: actionTypes.SHOW_ALL_POSTS,
	SHOW_POSTS_BY_CATEGORY: actionTypes.SHOW_POSTS_BY_CATEGORY
};

export const GetPostById = id => ({
	type: actionTypes.GET_POST_BY_ID,
	id
});

export const ShowPostsByCategory = id => ({
	type: actionTypes.SHOW_POSTS_BY_CATEGORY,
	filter: id
});
