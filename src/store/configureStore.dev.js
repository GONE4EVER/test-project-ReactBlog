import { createStore } from 'redux';

import reducers from '../reducers';

import posts from '../resources/posts.json';
import categories from '../resources/categories.json';


const fetchConfig = {
	isFetching: false,
	didInvalidate: false,
	lastUpdated: null
};


export default createStore(
	reducers,
	{
		posts: {
			content: posts,
			...fetchConfig
		},
		categories: {
			content: categories,
			currentCategory: null,
			...fetchConfig
		}
	},
	/* eslint-disable no-underscore-dangle */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	/* eslint-enable */
);
