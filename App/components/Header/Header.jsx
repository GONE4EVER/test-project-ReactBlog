import React from 'react';
import styles from './Header.css';
import NavBar from '../NavBar';


const Header = () => (
	<header className={styles.AppHeader}>
		<NavBar />
	</header>
);

export default Header;
