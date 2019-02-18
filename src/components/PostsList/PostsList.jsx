import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post';

import styles from './PostsList.css';


const noPostsFound = (
	<h1 className={styles.noPosts}>
		{'No posts found'}
	</h1>
);

const PostsList = React.memo(({ posts }) => (
	<ul className="col-md-10 blog-main">
		{!posts.length
			? noPostsFound
			: posts.map(item => (
				<Post key={item.id} {...item} />
			))
		}
	</ul>
));


PostsList.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			createdAt: PropTypes.number.isRequired,
			authorId: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			comments: PropTypes.array.isRequired
		})
	).isRequired
};

export default PostsList;
