import React from 'react';
import { Route } from 'react-router-dom';

import FullSizeImage from '../FullSizeImage/FullSizeImage';
import SelectCategory from '../SelectCategory/SelectCategory';
import VisiblePostsList from '../../containers/VisiblePostsList'

import images from '../../resources/images.json';

const Container = () => (
	<React.Fragment>
		<div className="card medium col s12">
			<FullSizeImage imgSrc={images.imgSrc} />
			<div className="card-content">
				<h3 className="left-align">Recent posts</h3>
			</div>
		</div>
		<div className="row">
			<VisiblePostsList />
			<SelectCategory />
		</div>
	</React.Fragment>
);

const Main = () => (
	<main className="col">
		<Route exact path="/main" component={Container} />
	</main>
);


export default Main;
