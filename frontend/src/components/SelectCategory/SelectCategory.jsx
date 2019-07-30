import React from 'react';
import PropTypes from 'prop-types';

import styles from './SelectCategory.css';


const SelectCategory = ({
	categories,
	history,
	match,
	switchCurrCategory
}) => {
	const { content, current } = categories;
	const { categoryId } = match.params;

	return (
		<aside className={`col-md-2 blog-sidebar ${styles.container}`}>
			<select
				className={styles.select}
				onChange={({ target }) => {
					switchCurrCategory({ history, target });
				}}
				defaultValue={current || categoryId}
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
		current: PropTypes.string.isRequired,
	}).isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			categoryId: PropTypes.string
		}),
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	switchCurrCategory: PropTypes.func.isRequired,
};


export default SelectCategory;
