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
import Interview from '../Interviews.jsx';
import Contact from '../Contact.jsx';
import PressPack from '../Press.jsx';


export default (
    <Route path="/" component={Main}>
        <Route path="Home" component={Home}/>
        <Route path="Theory" component={Theory}/>
        <Route path="MakingOf" component={MakingOf}/>
        <Route path="Screenings" component={Screenings}/>
        <Route path="Teaser" component={Teaser}/>
        <Route path="Stills" component={Stills}/>
        <Route path="Credits" component={Credits}/>
        <Route path="Interview" component={Interview}/>
        <Route path="Contact" component={Contact}/>
        <Route path="PressPack" component={PressPack}/>
        <IndexRoute component={Home}/>
    </Route>
);