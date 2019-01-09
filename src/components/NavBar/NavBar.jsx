import React, { Component } from 'react';
import NavBarElement from '../NavBarElement';
import navTabs from '../../App/tabs';

import styles from './NavBar.css';


class NavBar extends Component {
	state = {
		active: document.location.pathname !== '/'
			? document.location.pathname.replace('/', '')
			: 'main'
	}

	switchTab = (nextTab) => {
		this.setState(({ active }) => (active !== nextTab ? { active: nextTab } : {}));
	}

	render() {
		const { active } = this.state;

		return (
			<nav className={`${styles.AppHeader} ${styles.NavBar}`}>
				{navTabs.map(({ name, pathName }) => (
					<NavBarElement
						key={name}
						name={name}
						pathName={pathName}
						onClick={this.switchTab}
						active={active === pathName}
					/>
				))}
			</nav>
		);
	}
}


export default NavBar;
