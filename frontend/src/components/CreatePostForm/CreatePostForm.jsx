import React from 'react';
import PropTypes from 'prop-types';

import useForm from './useForm';
import InputName, {
	AuthorInput,
	TitleInput,
	DescriptionArea,
	CategorySelect
} from './Inputs';

import styles from './CreatePostForm.css';

const Form = ({
	categories, createPost, current, history
}) => {
	const [values, handleChange] = useForm({
		[InputName.author]: '',
		[InputName.category]: '',
		[InputName.text]: '',
		[InputName.title]: ''
	});

	const formRef = React.createRef();

	const validate = (ev) => {
		ev.preventDefault();

		if (!formRef.current.checkValidity()) {
			formRef.current.classList.add('was-validated');
			ev.stopPropagation();
		} else {
			createPost(values, { current, history });
		}
	};

	return (
		<div className="col-6">
			<form noValidate ref={formRef}>
				<AuthorInput onChange={handleChange} />
				<TitleInput onChange={handleChange} />
				<CategorySelect content={categories} onChange={handleChange} />
				<DescriptionArea onChange={handleChange} />
				<div className={styles.content}>
					<button
						type="submit"
						className="btn btn-primary"
						style={{ width: '50%' }}
						onClick={validate}
					>
						{'Submit'}
					</button>
				</div>
			</form>
		</div>
	);
};

Form.propTypes = {
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	).isRequired,
	current: PropTypes.string.isRequired,
	createPost: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default Form;
