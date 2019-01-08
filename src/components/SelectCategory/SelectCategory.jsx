import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';

import styles from './SelectCategory.css';

const SelectCategory = ({ categories, switchVisibility }) => {
	const { content, currentCategory } = categories;

	return (
		<aside className={`col-md-2 blog-sidebar ${styles.container}`}>
			<select
				className={styles.select}
				onChange={ev => switchVisibility(ev.target.value)}
				defaultValue={currentCategory}
			>
				<option value="">All Posts</option>
				{content.map(category => (
					<option
						key={category.name}
						value={category.id}
					>
						{category.name}
					</option>
				))}
			</select>
		</aside>
	);
};

SelectCategory.propTypes = {
	categories: PropTypes.shape({
		content: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired
			})
		).isRequired,
		currentCategory: PropTypes.string
	}).isRequired,
	switchVisibility: PropTypes.func.isRequired
};

export default SelectCategory;
