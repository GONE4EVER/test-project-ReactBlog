import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './NavBarElement.css';


const NavBarElement = ({ name }) => (
	<div
		className={styles.element}
		to={name}
		role="button"
	>
		{name}
	</div>
);


NavBarElement.propTypes = {
	name: PropTypes.string.isRequired
};

export default NavBarElement;
