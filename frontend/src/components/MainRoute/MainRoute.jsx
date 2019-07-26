import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import styles from './MainRoute.css';
import image from '../../assets/Sakura.jpg';

import CategoriesSelect from '../../containers/CategoriesSelect';
import VisiblePostsList from '../../containers/VisiblePostsList';
import FullSizeImage from './FullSizeImage';


const MainRoute = ({ match, history }) => (
	<main>
			<FullSizeImage src={image} />
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


export default hot(module)(withRouter(MainRoute));
