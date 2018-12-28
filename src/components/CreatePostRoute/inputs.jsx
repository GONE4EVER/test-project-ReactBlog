import React from 'react';

import styles from './CreatePostRoute.css';

export const	AuthorInput = () => (
	<div className="row">
		<div className="input-field col s12">
			<input
				placeholder="Author"
				type="text"
				id="author-input"
				className="autocomplete col s12"
			/>
		</div>
	</div>
);

export const TitleInput = () => (
	<div className="row">
		<div className="input-field col s12">
			<input
				placeholder="Title"
				type="text"
				id="title-input"
				className="autocomplete col s12"
			/>
		</div>
	</div>
);

export const CategorySelect = () => (
	<div className="input-field col s12">
		<select>
			<option value="" disabled selected>Choose your option</option>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</select>
		<label>Materialize Select</label>
	</div>
);
