import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import CreatePost from './components/CreatePost';

import styles from './App.css';
import NavBar from './components/NavBar/NavBar';


const App = () => (
	<HashRouter>
		<>
			<NavBar />
			<div className={styles.AppContainer}>
				<Switch>
					<Route exact path="/Main" component={Main} />
					<Route path="/Create_Post" component={CreatePost} />
				</Switch>
			</div>
		</>
	</HashRouter>
);


ReactDOM.render(
	<App />, document.getElementById('root')
);
