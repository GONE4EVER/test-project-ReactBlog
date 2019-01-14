import React, { PureComponent } from 'react';
import Comments from './Comments';
import Heading from './Heading';
import Content from './Content';

import styles from './Post.css';
import Likes from './Likes';


class Post extends PureComponent {
	render() {
		return (
			<article className={`blog-post ${styles.post}`}>
				<Heading {...this.props}		/>
				<Content {...this.props} />
				<footer className={styles.footer}>
					<Comments {...this.props} />
					<Likes {...this.props} />
				</footer>
				<hr />
			</article>
		);
	}
}


export default Post;
