import React from 'react';
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
					<TableRow content={post} num={num} clickHandler={deletePost} />
				))}
			</tbody>
		</table>
	</div>

);

export default ManagePostsTable;
