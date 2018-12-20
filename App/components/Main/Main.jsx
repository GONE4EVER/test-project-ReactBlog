import React from 'react';

import images from '../../resources/images.json';
import FullSizeImage from '../FullSizeImage';
import PostsList from '../PostsList';
import SelectCategory from '../SelectCategory';


const Main = () => (
	<main className="col">
		<div className="card medium col s12">
			<FullSizeImage imgSrc={images.imgSrc} />
			<div className="card-content">
				<h3 className="left-align">Recent posts</h3>
			</div>
		</div>
		<div className="row">
			<PostsList />
			<SelectCategory />
		</div>

	</main>
);


export default Main;
