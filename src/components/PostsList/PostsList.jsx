import React from 'react';
import Post from '../Post';
import PostLink from '../../containers/PostLink'


const PostsList = ({posts})=>  (
	<ul className="col s10">
		{posts.map(item => (
			<Post key={item.id} {...item}/>
		))}
	</ul>
);

export default PostsList;
