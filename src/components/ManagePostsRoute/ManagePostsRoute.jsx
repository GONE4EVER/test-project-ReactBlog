import React from 'react';
import ManagePostsList from '../../containers/ManagePostsTable';

import styles from './ManagePostsRoute.css';


const ManagePostsRoute = () => (
	<React.Fragment>
		<h2 className={styles.header}>Manage Posts</h2>
		<div className={styles.content}>
			<ManagePostsList />
		</div>
	</React.Fragment>
);

export default ManagePostsRoute;
