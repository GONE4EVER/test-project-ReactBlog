import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../App/routeNames';
import styles from './Post.css';
import { PostContext } from './Post';


const Heading = () => (
	<PostContext.Consumer>
		{(value) => {
			const date = new Date(value.createdAt);

			const day = date.getDate();
			const month = date.toLocaleString('en-us', { month: 'long' });
			const year = date.getFullYear();

			return (
				<React.Fragment>
					<div className={styles.headerFlex}>
						<Link to={`${routes.POSTS}/${value.id}`}>
							<h2 className={`blog-post-title ${styles.cursorPointer}`}>{value.title}</h2>
						</Link>
						<div className={styles.headSpacer} />
					</div>
					<p className="blog-post-meta">
						<b>{`${day} ${month} ${year}`}</b>
						{' by '}
						<Link to="/">{value.authorId}</Link>
					</p>
				</React.Fragment>
			);
		}}
	</PostContext.Consumer>
);


export default Heading;
