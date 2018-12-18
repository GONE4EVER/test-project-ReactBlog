import React from 'react';

import { posts } from '../../resources/posts.json';
import images from '../../resources/images.json';
import FullSizeImage from './FullSizeImage';


const Main = () => (
	<main className="col">
		<div className="card medium col s12">
			<FullSizeImage imgSrc={images.imgSrc} />
			<div className="card-content">
				<h3 className="left-align">Recent posts</h3>
			</div>
		</div>
	</main>
);


export default Main;
