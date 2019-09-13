import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostDetails from '../../containers/PostDetails';

import routes from '../../App/routeNames';


const PostRoute = () => (
	<Switch>
		<Route exact path={`${routes.POSTS}/:postId`} component={PostDetails} />
</Switch>
);


export default PostRoute;
