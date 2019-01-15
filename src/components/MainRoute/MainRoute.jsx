import React from 'react';
import { withRouter } from 'react-router-dom';

import FullSizeImage from './FullSizeImage';
import CategoriesSelect from '../../containers/CategoriesSelect';
import VisiblePostsList from '../../containers/VisiblePostsList';

import images from '../../resources/images.json';
import styles from './MainRoute.css';

const MainRouteContainer = () => (
	<div className={`row ${styles.container}`}>
		<VisiblePostsList />
		<CategoriesSelect />
	</div>
);

const MainRoute = () => (
	<main>
		<FullSizeImage imgSrc={images.imgSrc} />
		<MainRouteContainer />
	</main>
);


export default withRouter(MainRoute);
export { MainRouteContainer };
