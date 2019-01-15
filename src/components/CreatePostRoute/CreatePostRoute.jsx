import React from 'react';
import CreatePostForm from '../../containers/CreatePostForm';

import styles from './CreatePostRoute.css';


const CreatePostRoute = () => (
	<React.Fragment>
		<h2 className={styles.header}>Create New Post</h2>
		<div className={styles.content}>
			<CreatePostForm />
		</div>
	</React.Fragment>
);

export default CreatePostRoute;
