import React from 'react';
import PropTypes from 'prop-types';


const TableRow = ({ content, num, clickHandler }) => (
	<tr>
		<th scope="row">{num}</th>
		<td>{content.id}</td>
		<td>{content.title}</td>
		<td>{content.authorId}</td>
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


TableRow.propTypes = {
	content: PropTypes.shape({
		authorId: PropTypes.string.isRequired,
		createdAt: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired
	}).isRequired,
	num: PropTypes.number.isRequired,
	clickHandler: PropTypes.func.isRequired
};

export default TableRow;
