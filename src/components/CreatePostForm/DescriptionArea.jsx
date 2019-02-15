import React from 'react';
import PropTypes from 'prop-types';

import { inputNames } from './CreatePostForm';


const DescriptionArea = React.memo(({ onChange }) => (
	<div className="form-group">
		<label htmlFor={inputNames.text}>Description</label>
		<textarea
			required
			id={inputNames.text}
			className="form-control"
			rows="8"
			onChange={(ev) => { onChange(inputNames.text, ev.target.value); }}
		/>
		<div className="valid-feedback">
			{'Looks good!'}
		</div>
		<div className="invalid-feedback">
			{'Please, provide the description'}
		</div>
	</div>
));


DescriptionArea.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default DescriptionArea;
