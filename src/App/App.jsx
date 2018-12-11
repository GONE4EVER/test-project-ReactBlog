import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.css';

const App = () => (
	<>
		<header className={styles.AppHeader} />
		<main className={styles.AppContainer}>
			{'Hi'}
		</main>
	</>
);

ReactDOM.render(
	<App />, document.getElementById('root')
);
