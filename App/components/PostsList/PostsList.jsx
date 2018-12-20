import React from 'react';
import Post from '../Post';

import posts from '../../resources/posts.json';


const PostsList = () => (
	<ul className="col s10">
		{posts.map(item => (
			<Post key={item.id} {...item} />
		))}
	</ul>
);

export default PostsList;
