import React from 'react';

import PostContext from './Context';

import styles from './Post.css';


const Content = () => (
	<PostContext.Consumer>
		{value => (
			<div className={`row ${styles.content}`}>
				<div className={`col-2 ${styles.imgContainer}`}>
					<img src={value.img || 'https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif'} alt="" />
				</div>
				<p className={`col-10 ${styles.text}`}>
					{value.text}
				</p>
			</div>
		)}
	</PostContext.Consumer>
);


export default Content;
