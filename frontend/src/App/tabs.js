const MAIN = 'main';
const CREATE_POST = 'create_post';
const POSTS = 'posts';
const CREATE_CATEGORY = 'create_category';
const MANAGE_POSTS = 'manage_posts';
const MANAGE_CATEGORY = 'manage_category';

export {
	MAIN,
	CREATE_POST,
	POSTS,
	CREATE_CATEGORY,
	MANAGE_POSTS,
	MANAGE_CATEGORY,
};

export default [
	{ name: 'Main', pathName: `${MAIN}` },
	{ name: 'Create Post', pathName: `${CREATE_POST}` },
	{ name: 'Manage posts', pathName: `${MANAGE_POSTS}` },
	{ name: 'Create category', pathName: `${CREATE_CATEGORY}` },
	{ name: 'Manage category', pathName: `${MANAGE_CATEGORY}` }
];
