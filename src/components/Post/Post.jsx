import React from 'react';

import Comments from './Comments';
import Content from './Content';
import Heading from './Heading';
import Likes from './Likes';

import styles from './Post.css';


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
