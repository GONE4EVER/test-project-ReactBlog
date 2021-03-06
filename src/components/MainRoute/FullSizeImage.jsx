import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainRoute.css';


const FullSizeImage = ({ imgSrc }) => (
	<div className={styles.img}>
		<img
			src={imgSrc}
			alt=""
		/>
		<span className="card-title"><strong>Мао Цзэдун</strong></span>
	</div>
);

FullSizeImage.propTypes = {
	imgSrc: PropTypes.string.isRequired
};


export default FullSizeImage;
