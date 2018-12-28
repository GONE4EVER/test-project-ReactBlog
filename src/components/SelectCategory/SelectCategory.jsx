import React from 'react';
/* import PropTypes from 'prop-types'; */


const SelectCategory = () => (
	<aside className="col-md-2 blog-sidebar">
		<select>
			<option value="" disabled defaultValue>Choose your option</option>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</select>
	</aside>
);

export default SelectCategory;
