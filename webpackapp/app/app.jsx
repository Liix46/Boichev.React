import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SwitchWS from './classes/SwitchWS.jsx'



ReactDOM.render(
    <Router>
        <SwitchWS />
    </Router>,
    document.getElementById("app")
)