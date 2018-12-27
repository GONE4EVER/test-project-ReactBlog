import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import styles from './PostRoute.css';

const PostRoute = ({ match }) => {
	const { id } = match.params; // !!!

	return (
		<article className="col s12">
			<div
				className={styles.imgContainer}
			/>
			<Link to="/main">Back</Link>
			<br />
			<span>{id}</span>
		</article>
	);
};

PostRoute.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default PostRoute;
