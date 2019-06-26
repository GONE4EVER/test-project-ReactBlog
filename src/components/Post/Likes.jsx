import React from 'react';

import { PostContext } from './Post';

import styles from './Post.css';


const Likes = () => (
	<PostContext.Consumer>
		{(value) => {
			const total = value.likes.length - value.dislikes.length;

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
		}}
	</PostContext.Consumer>
);


export default Likes;
