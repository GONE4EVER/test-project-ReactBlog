import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Post.css';

const Heading = ({
	id, authorID, heading, time
}) => (
	<React.Fragment>
		<header className={`row ${styles.noBottom}`}>
    	<h6 className="col s2">{time}</h6>
    	<h6 className="col s2">{authorID}</h6>
		</header>
		<header className={`row ${styles.headerFontSize}`}>
			<Link to={`/posts/${id}`} >
				<b className={`col s12 ${styles.cursorPointer}`}>{heading}</b>
			</Link>
		</header>
	</React.Fragment>
);

Heading.propTypes = {
	id: PropTypes.string.isRequired,
	authorID: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired
};

export default Heading;
