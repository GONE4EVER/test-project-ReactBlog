import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import FullSizeImage from './FullSizeImage';
import CategoriesSelect from '../../containers/CategoriesSelect';
import VisiblePostsList from '../../containers/VisiblePostsList';

import images from '../../resources/images.json';
import styles from './MainRoute.css';


const MainRoute = ({ match, history }) => (
	<main>
		<FullSizeImage imgSrc={images.imgSrc} />
		<div className={`row ${styles.container}`}>
			<VisiblePostsList {...match} />
			<CategoriesSelect match={match} history={history} />
		</div>
	</main>
);


MainRoute.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			categoryId: PropTypes.string
		}).isRequired
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default withRouter(MainRoute);
