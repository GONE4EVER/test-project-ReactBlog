import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from '../../App/routeNames';
import styles from './PostRoute.css';


const Container = ({ match }) => {
	const { id } = match.params;

	return (
		<article className="col s12">
			<div
				className={styles.imgContainer}
			/>
			<Link to={routes.MAIN}>Back</Link>
			<br />
			<span>{id}</span>
		</article>
	);
};


Container.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default Container;
