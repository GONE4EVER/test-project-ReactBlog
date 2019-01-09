import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './NavBarElement.css';


class NavBarElement extends PureComponent {
	static propTypes = {
		active: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
		pathName: PropTypes.string.isRequired
	}

	render() {
		const {
			active, pathName, name, onClick
		} = this.props;

		return (
			<Link
				className={
					`${styles.element}`
				}
				to={`/${pathName}`}
				onClick={() => onClick(pathName)}
				replace
			>
				<div className={styles.text}>
					{name}
				</div>
				<span className={`${styles.border} ${active && styles.activeBorder}`} />
			</Link>
		);
	}
}


export default NavBarElement;
