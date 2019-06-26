import React from 'react';

import Comments from './Comments';
import Content from './Content';
import Heading from './Heading';
import Likes from './Likes';

import styles from './Post.css';

const PostContext = React.createContext({});

const Post = React.memo(props => (
	<PostContext.Provider value={props}>
		<article className={`blog-post ${styles.post}`}>
			<Heading />
			<Content />
			<footer className={styles.footer}>
				<Comments />
				<Likes />
			</footer>
			<hr />
		</article>
	</PostContext.Provider>
));


export default Post;
export { PostContext };
