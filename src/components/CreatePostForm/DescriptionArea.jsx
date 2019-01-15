import React from 'react';
import PropTypes from 'prop-types';

import { inputNames } from './CreatePostForm';

const DescriptionArea = React.memo(({ onChange }) => (
	<div className="form-group">
		<label htmlFor={inputNames.description}>Description</label>
		<textarea
			id={inputNames.description}
			className="form-control"
			rows="8"
			onChange={(ev) => { onChange(inputNames.description, ev.target.value); }}
		/>
	</div>
));

DescriptionArea.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default DescriptionArea;
