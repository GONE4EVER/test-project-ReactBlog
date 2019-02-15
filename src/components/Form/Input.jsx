import React from 'react';
/* import './CreatePostForm.css'; */


const Input = (config) => {
	const { title, label } = config;

	return React.memo(({ onChange }) => (
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
};


export default Input;
