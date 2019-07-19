import React from 'react';
import PropTypes from 'prop-types';

import routes from '../../App/routeNames';
import styles from './SelectCategory.css';


const SelectCategory = ({
	categories, match, history
}) => {
	const { content } = categories;
	const { categoryId } = match.params;

	return (
		<aside className={`col-md-2 blog-sidebar ${styles.container}`}>
			<select
				className={styles.select}
				onChange={({ target }) => {
					history.push(`${routes.MAIN}/${target.value || ''}`);
				}}
				defaultValue={categoryId}
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
	}).isRequired,
	match: PropTypes.shape({
		categoryId: PropTypes.string
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default SelectCategory;
