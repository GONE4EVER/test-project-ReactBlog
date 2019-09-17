import React from 'react';
import PropTypes from 'prop-types';

import PostContext from './Context';

import styles from './Post.css';


const Likes = React.memo(({ ratePost }) => (
	<PostContext.Consumer>
		{({ likes, id, dislikes }) => {
			const total = likes.length - dislikes.length;
			const like = () => ratePost(id, true);
			const dislike = () => ratePost(id, false);

			return (
				<div className={`col-11 ${styles.assessment}`}>
					<i
						className={`fa fa-caret-up ${styles.cursorPointer}`}
						aria-hidden="true"
						onClick={like}
					/>
					<span className={styles.totalLikes}>
						{total > 0 ? `+${total}` : total}
					</span>
					<i
						className={`fa fa-caret-down ${styles.cursorPointer}`}
						aria-hidden="true"
						onClick={dislike}
					/>
				</div>
			);
		}}
	</PostContext.Consumer>
));

Likes.propTypes = {
	ratePost: PropTypes.func.isRequired
};


export default Likes;
