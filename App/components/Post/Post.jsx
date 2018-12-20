import React from 'react';
import Comments from './Comments';
import Heading from './Heading';
import Content from './Content';

import styles from './Post.css';
import Likes from './Likes';


const Post = ({
	time, authorID, heading, img, text, comments, ...rest
}) => (
	<article className={`col s12 ${styles.post}`}>
		<section className={`section ${styles.noTop}`}>
			<Heading
				time={time}
				authorID={authorID}
				heading={heading}
			/>
			<Content img={img} text={text} />
		</section>
		<div className={`col s12 ${styles.footer}`}>
			<Comments comments={comments} />
			<Likes {...rest} />
		</div>
		<section className="divider col s12" />
	</article>
);


export default Post;
