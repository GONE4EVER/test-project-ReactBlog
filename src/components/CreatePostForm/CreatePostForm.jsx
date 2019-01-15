import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthorInput from './AuthorInput';
import styles from './CreatePostForm.css';
import TitleInput from './TitleInput';
import CategorySelect from './CategorySelect';
import DescriptionArea from './DescriptionArea';

const inputNames = {
	author: 'authorID',
	title: 'heading',
	category: 'categoryID',
	description: 'text'
};

export default class Form extends Component {
	static propTypes = {
		categories: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired
			})
		).isRequired,
		createPost: PropTypes.func.isRequired
	}

	state = {
		[inputNames.author]: '',
		[inputNames.title]: '',
		[inputNames.category]: '',
		[inputNames.description]: ''
	}

	getValues = () => this.state

	setInputState = (inputName, value) => {
		this.setState({ [inputName]: value });
	}

	render() {
		const { categories, createPost } = this.props;

		return (
			<div className="col-6">
				<form>
					<AuthorInput onChange={this.setInputState} />
					<TitleInput onChange={this.setInputState} />
					<CategorySelect content={categories} onChange={this.setInputState} />
					<DescriptionArea onChange={this.setInputState} />
					<div className={styles.content}>
						<button
							type="submit"
							className="btn btn-primary"
							style={{ width: '50%' }}
							onClick={(ev) => {
								createPost(this.getValues());
								ev.preventDefault();
							}}
						>
							{'Submit'}
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export { inputNames };