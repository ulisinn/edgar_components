import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import Main from '../../Main';
import Home from '../Home.jsx';
import Theory from '../Theory.jsx';
import MakingOf from '../MakingOf.jsx';
import Screenings from '../Screenings.jsx';
import Teaser from '../Teaser.jsx';
import Stills from '../Stills.jsx';
import Credits from '../Credits.jsx';
import Interviews from '../Interviews.jsx';
import Contact from '../Contact.jsx';
import Press from '../Press.jsx';


export default (
    <Route path="/" component={Main}>
        <Route path="Theory" component={Theory}/>
        <Route path="MakingOf" component={MakingOf}/>
        <Route path="Screenings" component={Screenings}/>
        <Route path="Teaser" component={Teaser}/>
        <Route path="Stills" component={Stills}/>
        <Route path="Credits" component={Credits}/>
        <Route path="Interviews" component={Interviews}/>
        <Route path="Press" component={Press}/>
        <IndexRoute component={Home}/>
    </Route>
);