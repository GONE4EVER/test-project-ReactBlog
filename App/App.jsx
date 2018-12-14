import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.css';
import NavBar from './components/NavBar/NavBar';

import navTabs from './components/NavBar/tabs';

const App = () => (
	<>
		<header className={styles.AppHeader}>
			<NavBar>
				{NavElement => (
					navTabs.map(name => (
						<NavElement key={name} name={name} />
					))
				)}
			</NavBar>
		</header>

		<main className={styles.AppContainer}>
			{'Hi'}
		</main>
	</>
);


ReactDOM.render(
	<App />, document.getElementById('root')
);
