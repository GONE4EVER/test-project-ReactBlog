import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import FullSizeImage from '../MainRoute/FullSizeImage';
import routes from '../../App/routeNames';

import styles from './PostRoute.css';


const Container = ({ match, selectedPost }) => {
	const { postId } = match.params;
	const exists = selectedPost || postId;

	return (
		exists
			? (
				<article className="col s12">
					<Link to={routes.MAIN}>Back</Link>
					<FullSizeImage src={selectedPost.img} />
					<span>{postId}</span>
				</article>
			)
			: <Redirect to={routes.MAIN} />
	);
};

Container.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			postId: PropTypes.string.isRequired
		}).isRequired
	}).isRequired,
	selectedPost: PropTypes.shape({
		img: PropTypes.string.isRequired,
	}).isRequired,
};

export default Container;
