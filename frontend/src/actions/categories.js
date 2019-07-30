import { categoryActions } from './actionTypes';
import routes from '../App/routeNames';

export const switchCurrentCategory = ({ history, target }) => {
	history.push(`${routes.MAIN}/${target.value || ''}`);

	return {
		type: categoryActions.SWITCH_CURR_CATEGORY,
		payload: {
			id: target.value
		}
	};
};

export const abc = () => {

};
