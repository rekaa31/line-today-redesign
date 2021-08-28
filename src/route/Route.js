import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom'
import IndexNewsPortal from '../page/IndexNewsPortal';
import RouterPage from './RouterPage';

const MainRoute = ({component = Component, layout: Layout, ...rest}) => (
    <Router>
        <RouterPage exact path="/" component={IndexNewsPortal} />
        <RouterPage exact path="/category/:id" component={IndexNewsPortal} />
    </Router>
);

export default MainRoute;