import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

import CreatePost from '../containers/CreatePost';

import Main from '../components/MainRoute';
import Post from '../components/PostRoute';
import Error from '../components/ErrorRoute';
import NavBar from '../components/NavBar/NavBar';

import routes from './routeNames';
import styles from './App.css';


const AppContainer = () => (
	<div className={styles.AppContainer}>
		<Switch>
			<Route exact path={routes.MAIN} component={Main} />
			<Route exact path={routes.CREATE_POST} component={CreatePost} />

			<Route strict path={routes.POSTS} component={Post} />

			<Redirect exact from="/" to={routes.MAIN} />
			<Route component={Error} />
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

ReactDOM.render(
	<App />, document.getElementById('root')
);
