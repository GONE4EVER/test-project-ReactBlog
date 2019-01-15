import React from 'react';
import Comments from './Comments';
import Heading from './Heading';
import Content from './Content';

import styles from './Post.css';
import Likes from './Likes';


const Post = React.memo(props => (
	<article className={`blog-post ${styles.post}`}>
		<Heading {...props}		/>
		<Content {...props} />
		<footer className={styles.footer}>
			<Comments {...props} />
			<Likes {...props} />
		</footer>
		<hr />
	</article>
));


export default Post;
