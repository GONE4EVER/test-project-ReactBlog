import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainRoute.css';

const FullSizeImage = ({ src }) => (
	<div className={styles.imgContainer}>
		<img
			className={styles.img}
			style={{
				backgroundImage: `url(${src})`
			}}
			alt=""
		/>
	</div>
);

FullSizeImage.propTypes = {
	src: PropTypes.string.isRequired
};

export default FullSizeImage;
