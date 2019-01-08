import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CreatePost from '../components/CreatePostRoute';
import Main from '../components/MainRoute';
import Post from '../components/PostRoute';
import Error from '../components/ErrorRoute';
import NavBar from '../components/NavBar/NavBar';

import reducers from '../reducers';

import posts from '../resources/posts.json';
import categories from '../resources/categories.json';
import styles from './App.css';

const Header = () => (
	<header className={styles.AppHeader}>
		<NavBar />
	</header>
);

const AppContainer = () => (
	<div className={styles.AppContainer}>
		<Switch>
			<Route exact path="/main" component={Main} />
			<Route exact path="/create_post" component={CreatePost} />

			<Route strict path="/posts" component={Post} />

			<Redirect exact from="/" to="/main" />
			<Route component={Error} />
		</Switch>
	</div>
);

/* eslint-disable no-underscore-dangle */
const App = () => (
	<Provider store={createStore(reducers, {
		posts: { content: posts }, categories: { content: categories }
	}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}
	>
		<Router>
			<React.Fragment>
				<Header />
				<AppContainer />
			</React.Fragment>
		</Router>
	</Provider>
);
/* eslint-enable */

ReactDOM.render(
	<App />, document.getElementById('root')
);
