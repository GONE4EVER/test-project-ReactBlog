import React from 'react';
import PropTypes from 'prop-types';

import styles from './CreatePostRoute.css';

export const	AuthorInput = () => (
	<div className="form-group">
		<label htmlFor="author-input">Author</label>
		<input
			placeholder="Type here..."
			type="text"
			id="author-input"
			className="autocomplete form-control"
			name="authorName"
		/>
	</div>
);

export const TitleInput = () => (
	<div className="form-group">
		<label htmlFor="title-input">Title</label>
		<input
			placeholder="Type here..."
			type="text"
			id="title-input"
			className="autocomplete form-control"
			name="heading"
		/>
	</div>
);

export const CategorySelect = ({ content }) => (
	<div className="form-group">
		<label htmlFor="categories-select">Category</label>
		<select
			id="categories-select"
			placeholder="Choose your option"
			className="form-control"
			name="categoryID"
		>
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


export const Description = () => (
	<div className="form-group">
		<label htmlFor="description-area">Description</label>
		<textarea
			id="description-area"
			className="form-control"
			rows="8"
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
