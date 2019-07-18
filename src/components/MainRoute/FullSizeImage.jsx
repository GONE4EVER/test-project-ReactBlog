import React from 'react';

import image from '../../assets/Sakura.jpg';

import styles from './MainRoute.css';

const FullSizeImage = () => (
	<div className={styles.img}>
		<img
			src={image}
			alt=""
		/>
	</div>
);


export default FullSizeImage;
