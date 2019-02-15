import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './CreateCategoryRoute.css';


const CreateCategoryRoute = () => (
	<React.Fragment>
		<h2 className={styles.header}>Create New Category</h2>
		<div className={styles.content}>
			<form className="form-signin" />
		</div>
	</React.Fragment>
);

export default withRouter(CreateCategoryRoute);
