import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';

import Main from './components/Main';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar';
import Error from './components/Error';

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
			<Route path="/create_post" component={CreatePost} />
			<Route component={Error} />
		</Switch>
	</div>
);

const App = () => (
	<Router>
		<React.Fragment>
			<Header />
			<AppContainer />
		</React.Fragment>
	</Router>
);


ReactDOM.render(
	<App />, document.getElementById('root')
);
