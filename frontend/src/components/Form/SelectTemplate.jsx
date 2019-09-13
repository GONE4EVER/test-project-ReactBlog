import React from 'react';
import PropTypes from 'prop-types';

export default (config) => {
	const { label, title } = config;

	const Select = React.memo(({ content, onChange }) => (
		<div className="form-group">
			<label htmlFor={title}>{label}</label>
			<select
				required
				placeholder="Choose your option"
				id={title}
				className="form-control"
				name={title}
				defaultValue=""
				onChange={(ev) => { onChange(title, ev.target.value); }}
			>
				<option value="">Choose category...</option>
				{content.map(item => (
					<option
						key={item.name}
						value={item.id}
					>
						{item.name}
					</option>
				))}
			</select>
			<div className="valid-feedback">
				{'Looks good!'}
			</div>
			<div className="invalid-feedback">
				{'Please, select posts category'}
			</div>
		</div>
	));

	Select.propTypes = {
		content: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired
			})
		).isRequired,
		onChange: PropTypes.func.isRequired
	};

	return Select;
};
