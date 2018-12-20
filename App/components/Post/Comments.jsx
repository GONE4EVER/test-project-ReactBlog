import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.css';

const Comments = ({ comments, likes, dislikes }) => (
	<React.Fragment>
		<div
			name="commentsIcon"
			className={`fa fa-comments ${styles.ico}`}
			aria-hidden="true"
		/>
		<span>
			{comments.length}
		</span>
	</React.Fragment>
);

Comments.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	likes: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	dislikes: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired
};

export default Comments;
