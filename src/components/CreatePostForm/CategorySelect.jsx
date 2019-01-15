import React from 'react';
import PropTypes from 'prop-types';

import { inputNames } from './CreatePostForm';


const CategorySelect = React.memo(({ content, onChange }) => (
	<div className="form-group">
		<label htmlFor={inputNames.category}>Category</label>
		<select
			placeholder="Choose your option"
			id={inputNames.category}
			className="form-control"
			name="categoryID"
			defaultValue=""
			onChange={(ev) => { onChange(inputNames.category, ev.target.value); }}
		>
			<option value="">Choose category...</option>
			{content.map(item => (
				<option
					key={item.name}
					value={item.id}
				>
					{item.name}
				</option>
			))}
		</select>
	</div>
));


CategorySelect.propTypes = {
	content: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	).isRequired,
	onChange: PropTypes.func.isRequired
};

export default CategorySelect;
