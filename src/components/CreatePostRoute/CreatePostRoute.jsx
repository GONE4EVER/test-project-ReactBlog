import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';

import LoadingHandler from '../LoadingHandler';

import styles from './CreatePostRoute.css';

const CreatePostForm = React.lazy(() => import('../../containers/CreatePostForm'));

const CreatePostRoute = props => (
	<React.Fragment>
		<h2 className={styles.header}>Create New Post</h2>
		<Suspense fallback={<LoadingHandler/>}>
			<div className={styles.content}>
				<CreatePostForm {...props} />
			</div>
		</Suspense>
	</React.Fragment>
);


export default withRouter(CreatePostRoute);
