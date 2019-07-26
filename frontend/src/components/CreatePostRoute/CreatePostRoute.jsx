import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';

import CreatePostForm from '../../containers/CreatePostForm'

import styles from './CreatePostRoute.css';


const CreatePostRoute = props => (
	<React.Fragment>
		<h2 className={styles.header}>Create New Post</h2>
		<div className={styles.content}>
				<CreatePostForm {...props} />
			</div>
	</React.Fragment>
);


export default withRouter(CreatePostRoute);
