import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.css';

const App = () => (
	<main className={styles.App}>
		{'Hi'}
	</main>
);

ReactDOM.render(
	<App />, document.getElementById('root')
);
