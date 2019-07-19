import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

import CreateCategoryRoute from '../components/CreateCategoryRoute';
import CreatePostRoute from '../components/CreatePostRoute';
import ErrorRoute from '../components/ErrorRoute';
import MainRoute from '../components/MainRoute';
import ManagePostsRoute from '../components/ManagePostsRoute/ManagePostsRoute';
import PostRoute from '../components/PostRoute';

import NavBar from '../components/NavBar/NavBar';

import routes from './routeNames';

import styles from './App.css';

const AppContainer = () => (
	<div className={styles.AppContainer}>
		<Switch>
			<Route strict path={`${routes.MAIN}/:categoryId?`} component={MainRoute} />
			<Route exact path={routes.CREATE_CATEGORY} component={CreateCategoryRoute} />
			<Route exact path={routes.CREATE_POST} component={CreatePostRoute} />
			<Route exact path={routes.MANAGE_POSTS} component={ManagePostsRoute} />

			<Route strict path={`${routes.POSTS}`} component={PostRoute} />

			<Redirect exact from="/" to={routes.MAIN} />
			<Redirect exact from="/pages/" to={routes.MAIN} />
			
			<Route component={ErrorRoute} />
		</Switch>
	</div>
);

const App = () => (
	<Provider store={store}>
		<Router>
			<React.Fragment>
				<NavBar />
				<AppContainer />
			</React.Fragment>
		</Router>
	</Provider>
);

const root = document.createElement('div');
root.id = styles.root;
document.body.appendChild(root);

ReactDOM.render(
	<App />, root
);
