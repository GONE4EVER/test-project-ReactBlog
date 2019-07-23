import React, { Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import LoadingHandler from '../LoadingHandler';

import styles from './MainRoute.css';
import image from '../../assets/Sakura.jpg';

const CategoriesSelect = React.lazy(() => import('../../containers/CategoriesSelect'));
const VisiblePostsList = React.lazy(() => import('../../containers/VisiblePostsList'));
const FullSizeImage = React.lazy(() => import('./FullSizeImage'));

const MainRoute = ({ match, history }) => (
	<Suspense fallback={<LoadingHandler />}>
		<main>
			<FullSizeImage src={image} />
			<div className={`row ${styles.container}`}>
				<VisiblePostsList {...match} />
				<CategoriesSelect match={match} history={history} />
			</div>
		</main>
	</Suspense>
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
