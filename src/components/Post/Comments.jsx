import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.css';

const Comments = ({ comments }) => (
	<div className={`col-1 ${styles.comments}`}>
		<div
			name="commentsIcon"
			className="fa fa-comments "
			aria-hidden="true"
		/>
		<span className={styles.spanText}>
			<b>{comments.length}</b>
		</span>
	</div>
);

Comments.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
};

export default Comments;
