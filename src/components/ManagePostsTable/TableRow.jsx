import React from 'react';

export default ({ content, num, clickHandler }) => (
	<tr>
		<th scope="row">{num}</th>
		<td>{content.id}</td>
		<td>{content.heading}</td>
		<td>{content.authorID}</td>
		<td>{content.createdAt}</td>
		<td>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => clickHandler(content.id)}
			>
				{'Delete'}
			</button>
		</td>
	</tr>
);
