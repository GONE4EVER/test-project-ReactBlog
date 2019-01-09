import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.css';

const Likes = ({ likes, dislikes }) => {
	const total = likes.length - dislikes.length;

	return (
		<div className={`col-11 ${styles.assessment}`}>
			<i
				className={`fa fa-caret-up ${styles.cursorPointer}`}
				aria-hidden="true"
				onClick={() => alert('+1')}
			/>
			<span className={styles.totalLikes}>
				{total > 0 ? `+${total}` : total}
			</span>
			<i
				className={`fa fa-caret-down ${styles.cursorPointer}`}
				aria-hidden="true"
				onClick={() => alert('-1')}
			/>
		</div>
	);
};

Likes.propTypes = {
	likes: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	dislikes: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired
};

export default Likes;
