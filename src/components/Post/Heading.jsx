import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from '../../App/routeNames';
import styles from './Post.css';

const Heading = ({
	id, authorID, heading, time
}) => (
	<React.Fragment>
		<div className={styles.headerFlex}>
			<Link to={`${routes.POSTS}${id}`}>
				<h2 className={`blog-post-title ${styles.cursorPointer}`}>{heading}</h2>
			</Link>
			<div className={styles.headSpacer} />
		</div>
		<p className="blog-post-meta">
			<b>{time}</b>
			{' by '}
			<a href="/">{authorID}</a>
		</p>
	</React.Fragment>
);

Heading.propTypes = {
	id: PropTypes.string.isRequired,
	authorID: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired
};

export default Heading;
