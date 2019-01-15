import React from 'react';

import styles from './ErrorRoute.css';

const ErrorRoute = () => (
	<h1 className={styles.error}>
		<b>Ooops! </b>
		{'No such directory.'}
		<br />
		{'Please, ensure that you`ve entered correct pathname'}
	</h1>
);

export default ErrorRoute;
