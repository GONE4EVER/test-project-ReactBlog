import React, { Component } from 'react';
import PropTypes from 'prop-types';

import routes from '../../App/routeNames';

import InputName, {
	AuthorInput,
	TitleInput,
	DescriptionArea,
	CategorySelect
} from './Inputs';

import styles from './CreatePostForm.css';


export default class Form extends Component {
	static propTypes = {
		categories: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired
			})
		).isRequired,
		createPost: PropTypes.func.isRequired,
		history: PropTypes.shape({
			push: PropTypes.func.isRequired
		}).isRequired
	}

	constructor() {
		super();
		this.formRef = React.createRef();
	}

	state = {
		[InputName.author]: '',
		[InputName.category]: '',
		[InputName.text]: '',
		[InputName.title]: ''
	}

	getValues = () => this.state

	setInputState = (inputName, value) => {
		this.setState({ [inputName]: value });
	}

	validate = (ev) => {
		const { createPost, history } = this.props;

		ev.preventDefault();

		if (this.formRef.current.checkValidity() === false) {
			this.formRef.current.classList.add('was-validated');
			ev.stopPropagation();
		} else {
			createPost(this.getValues());
			history.push(`${routes.MAIN}`);
		}
	}

	render() {
		const { categories } = this.props;

		return (
			<div className="col-6">
				<form noValidate ref={this.formRef}>
					<AuthorInput onChange={this.setInputState} />
					<TitleInput onChange={this.setInputState} />
					<CategorySelect content={categories} onChange={this.setInputState} />
					<DescriptionArea onChange={this.setInputState} />
					<div className={styles.content}>
						<button
							type="submit"
							className="btn btn-primary"
							style={{ width: '50%' }}
							onClick={this.validate}
						>
							{'Submit'}
						</button>
					</div>
				</form>
			</div>
		);
	}
}
