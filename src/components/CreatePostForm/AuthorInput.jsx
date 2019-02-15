import React from 'react';
import PropTypes from 'prop-types';

import { inputNames } from './CreatePostForm';
import './CreatePostForm.css';
import Input from '../Form/Input';


const AuthorInput = Input({
	title: 'authorId',
	label: 'Author'
});


AuthorInput.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default AuthorInput;
