import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import CreatePost from './components/CreatePost';

import styles from './App.css';
import NavBar from './components/Header/NavBar';
import Error from './components/Error';


const App = () => (
	<Router>
			<>
				<NavBar />
				<div className={styles.AppContainer}>
					<Switch>
						<Route exact path="/Main" component={Main} />
						<Route path="/Create_Post" component={CreatePost} />
						<Route component={Error} />
					</Switch>
				</div>
			</>
	</Router>
);


ReactDOM.render(
	<App />, document.getElementById('root')
);
