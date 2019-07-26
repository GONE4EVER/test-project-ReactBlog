import React from 'react';
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


export default withRouter(NavBar);
