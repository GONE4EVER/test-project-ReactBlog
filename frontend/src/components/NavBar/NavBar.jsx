import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import NavBarElement from '../NavBarElement';
import navTabs from '../../App/tabs';

import styles from './NavBar.css';


const NavBar = ({ history: { location } }) => {
	const { pathname } = location;

	return (
		<nav className={`${styles.AppHeader} ${styles.NavBar}`}>
			{navTabs.map(({ name, pathName }) => (
				<NavBarElement
					key={name}
					name={name}
					pathName={pathName}

					active={pathname === `/${pathName}`}
				/>
			))}
		</nav>
	);
};

NavBar.propTypes = {
	history: PropTypes.shape({
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
};


export default withRouter(NavBar);
