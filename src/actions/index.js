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

export const CreatePost = (content) => {
	const currDate = Date.now();

	return ({
		type: actionTypes.CREATE_POST,
		payload: {
			...content,
			createdAt: currDate,
			id: `postID_${currDate}`,
			comments: [],
			likes: [],
			dislikes: [],
			img: 'https://i.ytimg.com/vi/bEVeO4q8HkM/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCI6rX1v4LXr9DJ_nbIVRLgy_JxZg' // !!!
		}
	});
};
