import React from 'react';
/* import PropTypes from 'prop-types'; */
import styles from './SelectCategory.css'

const SelectCategory = ({categories, switchVisibility}) => (
	<aside className={`col-md-2 blog-sidebar ${styles.container}`}>
		<select className={styles.select}>
			<option value="" disabled defaultValue>Choose your option</option>
			{categories.map((category, index) => (
				<option key={category.name} value={index}>{category.name}</option>
			))}
		</select>
	</aside>
);

export default SelectCategory;
