import React from 'react';

import styles from './Error.css';

const Error = () => (
	<h1 className={styles.error}>
		<b>Ooops! </b>
		{'No such directory.'}
		<br />
		{'Please, ensure that you`ve entered correct pathname'}
	</h1>
);

export default Error;
