import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';


const ManagePostsTable = ({ posts, deletePost }) => (
	<div className="col-8">
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">ID</th>
					<th scope="col">Heading</th>
					<th scope="col">Author</th>
					<th scope="col">Created At</th>
					<th scope="col" />
				</tr>
			</thead>
			<tbody>
				{posts.map((post, num) => (
					<TableRow content={post} key={post.id} num={num + 1} clickHandler={deletePost} />
				))}
			</tbody>
		</table>
	</div>

);


ManagePostsTable.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape()
	).isRequired,
	deletePost: PropTypes.func.isRequired
};

export default ManagePostsTable;
