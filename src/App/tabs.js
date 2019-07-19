const RELATIVE_PATH = `pages`;

const MAIN = 'main';
const CREATE_POST = 'create_post';
const POSTS = 'posts';
const CREATE_CATEGORY = 'create_category';
const MANAGE_POSTS = 'manage_posts';
const MANAGE_CATEGORY = 'manage_category';

export {
	RELATIVE_PATH,

	MAIN,
	CREATE_POST,
	POSTS,
	CREATE_CATEGORY,
	MANAGE_POSTS,
	MANAGE_CATEGORY,
}

export default [
	{ name: 'Main', pathName: `${RELATIVE_PATH}/${MAIN}` },
	{ name: 'Create Post', pathName: `${RELATIVE_PATH}/${CREATE_POST}` },
	{ name: 'Manage posts', pathName: `${RELATIVE_PATH}/${MANAGE_POSTS}` },
	{ name: 'Create category', pathName: `${RELATIVE_PATH}/${CREATE_CATEGORY}` },
	{ name: 'Manage category', pathName: `${RELATIVE_PATH}/${MANAGE_CATEGORY}` }
];
