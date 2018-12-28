import React from 'react';
import Comments from './Comments';
import Heading from './Heading';
import Content from './Content';

import styles from './Post.css';
import Likes from './Likes';


const Post = ({
	id, time, authorID, heading, img, text, comments, onClick, ...rest
}) => (
	<article className={`blog-post ${styles.post}`}>
		<Heading
				time={time}
				authorID={authorID}
				heading={heading}
				id={id}
			/>
		<Content img={img} text={text} />
		<footer className={styles.footer}>
			<Comments comments={comments} />
			<Likes {...rest} />
		</footer>
		<hr/>
	</article>
);


export default Post;
