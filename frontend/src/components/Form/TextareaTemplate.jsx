import React from 'react';
import PropTypes from 'prop-types';


export default (config) => {
	const { label, title } = config;

	const TextArea = React.memo(({ onChange }) => (
		<div className="form-group">
			<label htmlFor={title}>{label}</label>
			<textarea
				required
				id={title}
				className="form-control"
				rows="8"
				name={title}
				onChange={onChange}
			/>
			<div className="valid-feedback">
				{'Looks good!'}
			</div>
			<div className="invalid-feedback">
				{'Please, provide the description'}
			</div>
		</div>
	));

	TextArea.propTypes = {
		onChange: PropTypes.func.isRequired,
	};

	return TextArea;
};
