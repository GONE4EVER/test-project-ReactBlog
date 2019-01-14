import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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
	composeWithDevTools(
		applyMiddleware(thunkMiddleware)
	)
);