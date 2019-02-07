import React from 'react';
import ManagePostsTable from '../../containers/ManagePostsTable';

import styles from './ManagePostsRoute.css';


const ManagePostsRoute = () => (
	<React.Fragment>
		<h2 className={styles.header}>Manage Posts</h2>
		<div className={styles.content}>
			<ManagePostsTable />
		</div>
	</React.Fragment>
);

export default ManagePostsRoute;
