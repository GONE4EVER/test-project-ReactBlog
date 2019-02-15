import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import FullSizeImage from './FullSizeImage';
import CategoriesSelect from '../../containers/CategoriesSelect';
import VisiblePostsList from '../../containers/VisiblePostsList';

import images from '../../resources/images.json';
import styles from './MainRoute.css';


const MainRouteContainer = ({ match, history }) => (
	<div className={`row ${styles.container}`}>
		<VisiblePostsList {...match} />
		<CategoriesSelect match={match} history={history} />
	</div>
);

const MainRoute = props => (
	<main>
		<FullSizeImage imgSrc={images.imgSrc} />
		<MainRouteContainer {...props} />
	</main>
);


export default withRouter(MainRoute);
export { MainRouteContainer };
