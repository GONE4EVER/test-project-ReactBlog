import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from '../../App/routeNames';
import styles from './Post.css';


const Heading = ({
	id, authorId, heading, createdAt
}) => {
	const date = new Date(createdAt);

	const day = date.getDate();
	const month = date.toLocaleString('en-us', { month: 'long' });
	const year = date.getFullYear();

	return (
		<React.Fragment>
			<div className={styles.headerFlex}>
				<Link to={`${routes.POSTS}/${id}`}>
					<h2 className={`blog-post-title ${styles.cursorPointer}`}>{heading}</h2>
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
};


Heading.propTypes = {
	id: PropTypes.string.isRequired,
	authorId: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	createdAt: PropTypes.number.isRequired
};

export default Heading;
