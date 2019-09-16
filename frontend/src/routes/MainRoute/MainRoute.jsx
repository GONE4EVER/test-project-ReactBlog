import React from 'react';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import CategoriesSelect from 'Containers/CategoriesSelect';
import VisiblePostsList from 'Containers/VisiblePostsList';
import styles from './MainRoute.css';
import image from '../../../assets/Sakura.jpg';

import FullSizeImage from './FullSizeImage';


const MainRoute = ({
	current,
	categories,
	setCategory,
	match,
	history
}) => {
	const { categoryId } = match.params;

	if (!current && categoryId
		&& !categories.find(item => item.id === categoryId)) {
		// for removing not existing category from url
		history.push('/');
	} else if (current && !categoryId) {
		// for getting back to the page with previously selected category
		history.push(`main/${current}`);
	} else if (!current && categoryId) {
		// for dispatching category selection when it's typed via url
		setCategory(history, categoryId);
	}

	return (
		<main>
			<FullSizeImage src={image} />
			<div className={`row ${styles.container}`}>
				<VisiblePostsList {...match} />
				<CategoriesSelect match={match} history={history} />
			</div>
		</main>
	);
};

MainRoute.propTypes = {
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	).isRequired, // !!! arrayOf
	current: PropTypes.string.isRequired,
	setCategory: PropTypes.func.isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			categoryId: PropTypes.string
		}).isRequired
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};


export default hot(module)(withRouter(MainRoute));
