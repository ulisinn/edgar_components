var Modernizr = require('./components/los_feliz/utils/modernizr');

require('./components/los_feliz/css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Main from './components/Main.js';
import {Router} from 'react-router';

import routes from "./components/los_feliz/config/routes";


//ReactDOM.render(<Main />, document.getElementById('app'));

main();

function main(){
    console.log("main");
    ReactDOM.render(
        <Router>{routes}</Router>,
        document.getElementById('app')
    );

}