import React from 'react';

import PostContext from './Context';

import styles from './Post.css';


const IMAGE_FALLBACK_LINK = 'https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif';

const Content = () => (
	<PostContext.Consumer>
		{({ img, text }) => (
			<div className={`row ${styles.content}`}>
				<div className={`col-2 ${styles.imgContainer}`}>
					<img src={img || IMAGE_FALLBACK_LINK} alt="" />
				</div>
				<p className={`col-10 ${styles.text}`}>
					{text}
				</p>
			</div>
		)}
	</PostContext.Consumer>
);


export default Content;
