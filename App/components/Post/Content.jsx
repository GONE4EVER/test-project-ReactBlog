import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.css';


const Content = ({ img, text }) => (
	<React.Fragment>
		<div className="col s3">
			<div
				className={styles.imgContainer}
				style={{ backgroundImage: `url(${img})` }}
			/>
		</div>
		<section className="col s9">
			{text}
		</section>
	</React.Fragment>
);

Content.propTypes = {
	img: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default Content;