import React from 'react';
import PropTypes from 'prop-types';


const FullSizeImage = ({ imgSrc }) => (
	<div className="card-image hoverable">
		<img
			className="responsive-img"
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
