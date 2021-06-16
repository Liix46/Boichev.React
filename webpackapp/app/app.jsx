import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';

import DataCapture from './components/DataCapture.jsx';
import Registration from './components/Registration.jsx';
import Login from './components/Login.jsx';
import NotFound from './components/NotFound.jsx';
import User from './classes/User.jsx';

let user = new User();

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path={`/SingUp/:${user}`} component={Registration} />
                <Route exact path="/SingIn" component={Login} />
                <Route exact path="/MySite/:user" component={DataCapture}/>
                <Route exact path="/"component={Navigation} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById("app")
)