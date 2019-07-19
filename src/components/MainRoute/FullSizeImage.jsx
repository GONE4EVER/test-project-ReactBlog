import React from 'react';

import styles from './MainRoute.css';

const FullSizeImage = ({ src }) => (
	<div className={styles.imgContainer}>
		<img
			className={styles.img}
			style={{
				backgroundImage:`url(${src})`
			}}
			alt=""
		/>
	</div>
);


export default FullSizeImage;
 