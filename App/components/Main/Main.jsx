import React from 'react';

import images from '../../resources/images.json';
import FullSizeImage from '../FullSizeImage';
import PostsList from '../PostsList';


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
			<div className="col s2">
				{'Select'}
			</div>
		</div>

	</main>
);


export default Main;
