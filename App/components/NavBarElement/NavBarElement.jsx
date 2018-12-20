import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './NavBarElement.css';

const BottomBorderElem = ({ active }) => (
	<span className={`${styles.border} ${active && styles.activeBorder}`} />
);

const Text = ({ content }) => (
	<div className={styles.text}>
		{content}
	</div>
);

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
					`${styles.element} 
						${active && styles.activeEl}`
				}
				to={pathName}
				onClick={() => onClick(pathName)}
			>
				<Text content={name} />
				<BottomBorderElem active={active} />
			</Link>
		);
	}
}


Text.propTypes = {
	content: PropTypes.string.isRequired
};

BottomBorderElem.propTypes = {
	active: PropTypes.bool.isRequired
};

export default NavBarElement;
