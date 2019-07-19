import React from 'react';
import PropTypes from 'prop-types';


export default (config) => {
	const { label, title } = config;

	const Input = React.memo(({ onChange }) => (
		<div className="form-group">
			<label htmlFor={title}>{label}</label>
			<input
				required
				placeholder="Type here..."
				type="text"
				id={title}
				className="autocomplete form-control"
				name={title}
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

	Input.propTypes = {
		onChange: PropTypes.func.isRequired
	};

	return Input;
};
