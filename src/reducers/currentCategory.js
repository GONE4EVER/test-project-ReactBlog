import actionTypes from '../actions/actionTypes';

const {SHOW_ALL, SHOW_POSTS_BY_CATEGORY} = actionTypes;

const currentCategory = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SHOW_POSTS_BY_CATEGORY:
      return action.filter;
    default:
      return state;
  }
};

export default currentCategory;