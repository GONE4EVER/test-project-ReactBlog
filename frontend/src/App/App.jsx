import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

import LoadingHandler from '../components/LoadingHandler';
import NavBar from '../components/NavBar/NavBar';

import routes from './routeNames';

import styles from './App.css';

const CreateCategoryRoute = React.lazy(() => import('Routes/CreateCategoryRoute'));
const ErrorRoute = React.lazy(() => import('Routes/ErrorRoute'));
const CreatePostRoute = React.lazy(() => import('Routes/CreatePostRoute'));
const MainRoute = React.lazy(() => import('Containers/MainRoute'));
const ManagePostsRoute = React.lazy(() => import('Routes/ManagePostsRoute'));
const PostRoute = React.lazy(() => import('Routes/PostRoute'));

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
			<NavBar />
			<Suspense fallback={<LoadingHandler />}>
				<AppContainer />
			</Suspense>
		</Router>
	</Provider>
);

const root = document.createElement('div');
root.id = styles.root;
document.body.appendChild(root);

ReactDOM.render(
	<App />, root
);
