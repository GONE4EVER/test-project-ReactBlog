import React from 'react';

import FullSizeImage from './FullSizeImage';
import CategoriesSelect from '../../containers/CategoriesSelect';
import VisiblePostsList from '../../containers/VisiblePostsList';

import images from '../../resources/images.json';
import styles from './MainRoute.css';


const Main = () => (
	<main>
		<React.Fragment>
			<FullSizeImage imgSrc={images.imgSrc} />
			<div className={`row ${styles.container}`}>
				<VisiblePostsList />
				<CategoriesSelect />
			</div>
		</React.Fragment>
	</main>
);


export default Main;
