import React from 'react';
import { Route } from 'react-router-dom';

import FullSizeImage from './FullSizeImage';
import SelectCategory from '../SelectCategory/SelectCategory';
import Categories from '../../containers/Categories'
import VisiblePostsList from '../../containers/VisiblePostsList'

import images from '../../resources/images.json';
import styles from './MainRoute.css'

const Container = () => (
	<React.Fragment>
		<FullSizeImage imgSrc={images.imgSrc} />
		<div className={`row ${styles.container}`}>
			<VisiblePostsList />
			<Categories />
		</div>
	</React.Fragment>
);

const Main = () => (
	<main>
		<Route exact path="/main" component={Container} />
	</main>
);


export default Main;
