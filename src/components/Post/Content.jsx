import React from 'react';

import { PostContext } from './Post';

import styles from './Post.css';


const Content = () => (
	<PostContext.Consumer>
		{value => (
			<div className={`row ${styles.content}`}>
				<div className={`col-2 ${styles.imgContainer}`}>
					<img src={value.img} alt="" />
				</div>
				<p className={`col-10 ${styles.text}`}>
					{value.text}
				</p>
			</div>
		)}
	</PostContext.Consumer>
);


export default Content;
