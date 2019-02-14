import React from 'react';
import PropTypes from 'prop-types';

import { inputNames } from './CreatePostForm';


const TitleInput = React.memo(({ onChange }) => (
	<div className="form-group">
		<label htmlFor={inputNames.title}>Title</label>
		<input
			required
			placeholder="Type here..."
			type="text"
			id={inputNames.title}
			className="autocomplete form-control"
			name="heading"
			onChange={(ev) => { onChange(inputNames.title, ev.target.value); }}
		/>
		<div className="valid-feedback">
			{'Looks good!'}
		</div>
		<div className="invalid-feedback">
			{'Please, provide the title'}
		</div>
	</div>
));


TitleInput.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default TitleInput;
