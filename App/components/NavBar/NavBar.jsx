import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import NavBarElement from '../NavBarElement';

import styles from './NavBar.css';


class NavBar extends Component {
  state = {

  }

  render() {
  	const { children } = this.props;

  	return (
  		<nav className={styles.NavBar}>
    		{children(NavBarElement)}
  		</nav>
  	);
  }
}


export default NavBar;
