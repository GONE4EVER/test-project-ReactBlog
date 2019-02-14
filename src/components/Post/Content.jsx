import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.css';


const Content = ({ img, text }) => (
	<div className={`row ${styles.content}`}>
		<div className={`col-2 ${styles.imgContainer}`}>
			<img src={img} alt="" />
		</div>
		<p className={`col-10 ${styles.text}`}>
			{text}
		</p>
	</div>
);


Content.propTypes = {
	img: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default Content;
