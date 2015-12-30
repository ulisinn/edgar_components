var Modernizr = require('./components/los_feliz/utils/modernizr');

require('./components/los_feliz/css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));