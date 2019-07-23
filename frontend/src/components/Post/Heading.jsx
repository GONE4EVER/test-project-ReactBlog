import React from 'react';
import { Link } from 'react-router-dom';

import PostContext from './Context';
import routes from '../../App/routeNames';

import styles from './Post.css';


const Heading = React.memo(() => (
	<PostContext.Consumer>
		{({
			title, authorId, id, createdAt
		}) => {
			const date = new Date(createdAt);

			const day = date.getDate();
			const month = date.toLocaleString('en-us', { month: 'long' });
			const year = date.getFullYear();

			return (
				<React.Fragment>
					<div className={styles.headerFlex}>
						<Link to={`${routes.POSTS}/${id}`}>
							<h2 className={`blog-post-title ${styles.cursorPointer}`}>{title}</h2>
						</Link>
						<div className={styles.headSpacer} />
					</div>
					<p className="blog-post-meta">
						<b>{`${day} ${month} ${year}`}</b>
						{' by '}
						<Link to="/">{authorId}</Link>
					</p>
				</React.Fragment>
			);
		}}
	</PostContext.Consumer>
));


export default Heading;
