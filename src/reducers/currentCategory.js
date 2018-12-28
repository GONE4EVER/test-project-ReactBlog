import actionTypes from '../actions/actionTypes';

const {SHOW_ALL_POSTS, SHOW_POSTS_BY_CATEGORY} = actionTypes;

const currentCategory = (state = SHOW_ALL_POSTS, action) => {
  switch (action.type) {
    case SHOW_POSTS_BY_CATEGORY:
      return action.filter;
    default:
      return state;
  }
};

export default currentCategory;