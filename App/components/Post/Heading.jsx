import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.css';

const Heading = ({ authorID, heading, time }) => (
	<React.Fragment>
		<header className={`row ${styles.noBottom}`}>
    	<h6 className="col s2">{time}</h6>
    	<h6 className="col s2">{authorID}</h6>
		</header>
		<header className={`row ${styles.headerFontSize}`}>
			<b className="col s12">{heading}</b>
		</header>
	</React.Fragment>
);

Heading.propTypes = {
	authorID: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired
};

export default Heading;
