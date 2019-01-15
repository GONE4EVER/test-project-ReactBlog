import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainRouteContainer } from '../MainRoute';

import routes from '../../App/routeNames';
import Container from './Container';

const PostRoute = () => (
	<Switch>
		<Route exact path={`${routes.POSTS}:id`} component={Container} />
		<Route exact path={`${routes.POSTS_BY_CATEGORY}:id`} component={MainRouteContainer} />
	</Switch>
);


export default PostRoute;
