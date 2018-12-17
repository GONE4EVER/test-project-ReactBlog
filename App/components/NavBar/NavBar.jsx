import React, { Component } from 'react';
import NavBarElement from '../NavBarElement';
import navTabs from './tabs';

import styles from './NavBar.css';


class NavBar extends Component {
  state = {
  	active: 'Main'
  }

	switchTab = (nextTab) => {
		this.setState((currState) => {
			const { active } = currState;

			if (active !== nextTab) {
				return { active: nextTab };
			}
			return {};
		});
	}

	render() {
		const { active } = this.state;

		return (
			<nav className={styles.NavBar}>
				{navTabs.map(name => (
					<NavBarElement
						key={name}
						name={name}
						onClick={this.switchTab}
						active={active === name}
					/>
				))}
			</nav>
		);
	}
}


export default NavBar;
