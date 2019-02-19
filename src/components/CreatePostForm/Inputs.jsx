import PropTypes from 'prop-types';

import InputTemplate from '../HOCs/InputTemplate';
import TextareaTemplate from '../HOCs/TextareaTemplate';
import SelectTemplate from '../HOCs/SelectTemplate';


const InputName = {
	author: 'authorId',
	title: 'title',
	category: 'categoryId',
	text: 'text'
};

const AuthorInput = InputTemplate({
	title: InputName.author,
	label: 'Author'
});

const CategorySelect = SelectTemplate({
	title: InputName.category,
	label: 'Category'
});

const DescriptionArea = TextareaTemplate({
	title: InputName.text,
	label: 'Description'
});

const TitleInput = InputTemplate({
	title: InputName.title,
	label: 'Title'
});


export {
	AuthorInput,
	CategorySelect,
	DescriptionArea,
	TitleInput
};
export default InputName;
