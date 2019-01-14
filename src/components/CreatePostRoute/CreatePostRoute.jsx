import React from 'react';

import * as Controls from './Controls';

import styles from './CreatePostRoute.css';

const Form = ({ categories, createPost }) => {
	console.log(categories);

	return (
		<div className="col-6">
			<form>
				<Controls.AuthorInput />
				<Controls.TitleInput />
				<Controls.CategorySelect content={categories} />
				<Controls.Description />
				<div className={styles.content}>
					<button
						type="submit"
						className="btn btn-primary"
						style={{ width: '50%' }}
						onClick={(ev) => {
							ev.preventDefault();
						}}
					>
						{'Submit'}
					</button>
				</div>
			</form>
		</div>
	);
};

const CreatePost = ({ categories, createPost }) => (
	<React.Fragment>
		<h2 className={styles.header}>Create New Post</h2>
		<div className={styles.content}>
			<Form
				categories={categories}
				createPost={createPost}
			/>
		</div>
	</React.Fragment>
);

export default CreatePost;
