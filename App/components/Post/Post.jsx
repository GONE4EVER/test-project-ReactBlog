import React from 'react';
import Comments from './Comments';
import Heading from './Heading';
import Content from './Content';

import styles from './Post.css';


const Footer = props => (
	<div className="col s12 ">
		<Comments {...props} />
	</div>
);

const Post = ({
	time, authorID, heading, img, text, ...rest
}) => (
	<article className="col s12">
		<section className={`section ${styles.noTop}`}>
			<Heading
				time={time}
				authorID={authorID}
				heading={heading}
			/>
			<Content img={img} text={text} />
		</section>
		<Footer {...rest} />
		<div className="divider col s12" />
	</article>
);


export default Post;
