import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './NavBarElement.css';


class NavBarElement extends PureComponent {
	static propTypes = {
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
		pathName: PropTypes.string.isRequired
	}

	render() {
		const {
			pathName, name, onClick
		} = this.props;

		return (
			<NavLink
				className={styles.element}
				to={`/${pathName}`}
				onClick={() => onClick(pathName)}
				activeStyle={{ borderBottom: '3px solid white' }}
			>
				<div className={styles.text}>
					{name}
				</div>
			</NavLink>
		);
	}
}


export default NavBarElement;
