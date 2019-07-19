import React from 'react';
import NavBarElement from '../NavBarElement';
import navTabs from '../../App/tabs';

import styles from './NavBar.css';


const NavBar = () => {
	const active = document.location.pathname.replace('/', '');

	return (
		<nav className={`${styles.AppHeader} ${styles.NavBar}`}>
			{navTabs.map(({ name, pathName }) => (
				<NavBarElement
					key={name}
					name={name}
					pathName={pathName}

					active={active === pathName}
				/>
			))}
		</nav>
	);
};


export default NavBar;
