import React from 'react';

import { inputNames } from './CreatePostForm';


export default React.memo(({ onChange }) => (
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
));
