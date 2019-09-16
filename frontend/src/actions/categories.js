import routes from 'App/routeNames';
import { categoryActions } from './actionTypes';

export const switchCurrentCategory = ({ history, value }) => {
	history.push(`${routes.MAIN}/${value || ''}`);

	return {
		type: categoryActions.SWITCH_CURR_CATEGORY,
		payload: {
			id: value
		}
	};
};

export const abc = () => {};
