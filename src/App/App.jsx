import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import CreatePost from '../components/CreatePostRoute';
import Main from '../components/MainRoute';
import Post from '../components/PostRoute';
import Error from '../components/ErrorRoute';
import NavBar from '../components/NavBar/NavBar';

import reducers from '../reducers';

import posts from '../resources/posts.json';
import styles from './App.css';

const Header = () => (
	<header className={styles.AppHeader}>
		<NavBar />
	</header>
);

const AppContainer = () => (
	<div className={styles.AppContainer}>
		<Switch>
			<Redirect exact from="/" to="/main" />
			<Route exact path="/main" component={Main} />
			<Route exact path="/create_post" component={CreatePost} />

			<Route exact path="/posts/:id" component={Post} />
			<Route exact path="/posts/category/:id" component={Error} />

			<Route component={Error} />
		</Switch>
	</div>
);

const App = () => (
	<Provider store={createStore(reducers, {
		posts, currentCategory: 'SHOW_ALL'
	})}>
		<Router>
			<React.Fragment>
				<Header />
				<AppContainer />
			</React.Fragment>
		</Router>
	</Provider>
);


ReactDOM.render(
	<App />, document.getElementById('root')
);
