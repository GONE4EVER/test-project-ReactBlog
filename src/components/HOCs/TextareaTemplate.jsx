import React from 'react';


export default (config) => {
	const { label, title } = config;

	return React.memo(({ onChange }) => (
		<div className="form-group">
			<label htmlFor={title}>{label}</label>
			<textarea
				required
				id={title}
				className="form-control"
				rows="8"
				name={title}
				onChange={(ev) => { onChange(title, ev.target.value); }}
			/>
			<div className="valid-feedback">
				{'Looks good!'}
			</div>
			<div className="invalid-feedback">
				{'Please, provide the description'}
			</div>
		</div>
	));
};
