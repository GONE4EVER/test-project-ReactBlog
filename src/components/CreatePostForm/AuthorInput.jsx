import React from 'react';
import PropTypes from 'prop-types';

import { inputNames } from './CreatePostForm';

const AuthorInput = React.memo(({ onChange }) => (
	<div className="form-group">
		<label htmlFor={inputNames.author}>Author</label>
		<input
			placeholder="Type here..."
			type="text"
			id={inputNames.author}
			className="autocomplete form-control"
			name="authorName"
			onChange={(ev) => { onChange(inputNames.author, ev.target.value); }}
		/>
	</div>
));

AuthorInput.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default AuthorInput;
