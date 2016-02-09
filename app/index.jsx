var Modernizr = require('./components/los_feliz/utils/modernizr');

require('./components/los_feliz/css/main.scss');
require('es6-promise').polyfill();

import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import routes from "./components/los_feliz/config/routes";

main();

function main(){
    ReactDOM.render(
        <Router>{routes}</Router>,
        document.getElementById('app')
    );
}