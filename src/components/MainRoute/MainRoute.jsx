import React from 'react';
import { Route } from 'react-router-dom';

import FullSizeImage from './FullSizeImage';
import SelectCategory from '../SelectCategory/SelectCategory';
import VisiblePostsList from '../../containers/VisiblePostsList'

import images from '../../resources/images.json';
import styles from './MainRoute.css'

const Container = () => (
	<div className="">
		<FullSizeImage imgSrc={images.imgSrc} />
		<div className="row">
			<VisiblePostsList />
			<SelectCategory />
		</div>
	</div>
);

const Main = () => (
	<main>
		<Route exact path="/main" component={Container} />
	</main>
);


export default Main;
