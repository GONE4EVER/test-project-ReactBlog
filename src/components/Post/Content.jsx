import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.css';


const Content = ({ img, text }) => (
	<p className={`row ${styles.content}`}>
		<div className={`col-2 ${styles.imgContainer}`}>
			<img src={img}/>
		</div>
		<p className={`col-10 ${styles.text}`}>
			{text}
		</p>
	</p>
);


Content.propTypes = {
	img: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default Content;
