import actionTypes from '../actions/actionTypes';

const {
	SHOW_ALL_CATEGORIES,
	CREATE_CATEGORY, 
	DELETE_CATEGORY
} = actionTypes;

const categories = (state = [], action) => {
	switch (action.type) {
		case SHOW_ALL_CATEGORIES: 
			return state;
			
		case CREATE_CATEGORY:
			return {
				...state,
				id: action.id
			};
		
		case DELETE_CATEGORY:
			return state.reduce((acc, category) => {
				if (category.id !== action.id) 
					acc.push(category)
			}, []);
		
		default:
			return state;
	}
};

export default categories;
