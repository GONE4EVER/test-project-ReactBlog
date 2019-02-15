import React from 'react';
import PropTypes from 'prop-types';

/* import './CreatePostForm.css'; */


const Input = (config) => {
	const { name, title } = config;

	return React.memo(({ onChange }) => (
		<div className="form-group">
			<label htmlFor={title}>Title</label>
			<input
				required
				placeholder="Type here..."
				type="text"
				id={title}
				className="autocomplete form-control"
				name={name}
				onChange={(ev) => { onChange(title, ev.target.value); }}
			/>
			<div className="valid-feedback">
				{'Perfect!'}
			</div>
			<div className="invalid-feedback">
				{'Please, fill this field'}
			</div>
		</div>
	));
};


Input.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default Input;
