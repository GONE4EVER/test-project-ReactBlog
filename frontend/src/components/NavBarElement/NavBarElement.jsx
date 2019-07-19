import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './NavBarElement.css';


const NavBarElement = React.memo((props) => {
	const {
		pathName, name
	} = props;

	return (
		<NavLink
			className={styles.element}
			to={`/${pathName}`}

			activeStyle={{ borderBottom: '3px solid white' }}
		>
			<div className={styles.text}>
				{name}
			</div>
		</NavLink>
	);
});


NavBarElement.propTypes = {
	name: PropTypes.string.isRequired,
	pathName: PropTypes.string.isRequired
};


export default NavBarElement;
