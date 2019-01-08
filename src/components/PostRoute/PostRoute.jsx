import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';


import styles from './PostRoute.css';
import Main from '../MainRoute/MainRoute';


const Container = ({ match }) => {
	const { id } = match.params;

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

const PostRoute = () => (
	<Switch>
		<Route exact path="/posts/:id" component={Container} />
		<Route exact path="/posts/category/:id" component={Main} />
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
