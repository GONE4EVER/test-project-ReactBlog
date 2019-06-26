import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const PostRoute = () => (
	<Switch>
		<Route exact path={`${routes.POSTS}/:id`} component={Container} />
	</Switch>
);


Container.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default PostRoute;
