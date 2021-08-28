import React, { Component } from 'react';
import './assets/styles/main-style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import MainRoute from './route/Route';

class App extends Component {
    render() {
        return (
            <MainRoute />
        );
    }
}

export default App;