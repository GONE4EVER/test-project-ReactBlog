import React from 'react';

import PostContext from './Context';

import styles from './Post.css';


const Comments = () => (
	<PostContext.Consumer>
		{({ comments }) => (
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
		)}
	</PostContext.Consumer>
);


export default Comments;
