import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post';


const PostsList = ({ posts }) => (
	<ul className="col-md-10 blog-main">
		{posts.map(item => (
			<Post key={item.id} {...item} />
		))}
	</ul>
);

PostsList.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			time: PropTypes.string.isRequired,
			authorID: PropTypes.string.isRequired,
			heading: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			comments: PropTypes.array.isRequired
		})
	).isRequired
};

export default PostsList;
