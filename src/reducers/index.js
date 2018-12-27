import { combineReducers } from 'redux';

import categories from './categories';
import posts from './postsList';
import currentCategory from './currentCategory';

export default combineReducers({
	categories,
	posts,
	currentCategory
});
