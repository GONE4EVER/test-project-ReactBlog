import React from 'react';
import PropTypes from 'prop-types';


const inputNames = {
	author: 'authorID',
	title: 'heading',
	category: 'categoryID',
	description: 'text'
};

const	AuthorInput = ({ onChange }) => (
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
);

const TitleInput = ({ onChange }) => (
	<div className="form-group">
		<label htmlFor={inputNames.title}>Title</label>
		<input
			placeholder="Type here..."
			type="text"
			id={inputNames.title}
			className="autocomplete form-control"
			name="heading"
			onChange={(ev) => { onChange(inputNames.title, ev.target.value); }}
		/>
	</div>
);

const CategorySelect = ({ content, onChange }) => (
	<div className="form-group">
		<label htmlFor={inputNames.category}>Category</label>
		<select
			placeholder="Choose your option"
			id={inputNames.category}
			className="form-control"
			name="categoryID"
			defaultValue=""
			onChange={(ev) => { onChange(inputNames.category, ev.target.value); }}
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
	</div>
);


const DescriptionArea = ({ onChange }) => (
	<div className="form-group">
		<label htmlFor={inputNames.description}>Description</label>
		<textarea
			id={inputNames.description}
			className="form-control"
			rows="8"
			onChange={(ev) => { onChange(inputNames.description, ev.target.value); }}
		/>
	</div>
);


CategorySelect.propTypes = {
	content: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	).isRequired
};

export default inputNames;
export {
	AuthorInput,
	TitleInput,
	CategorySelect,
	DescriptionArea
};
