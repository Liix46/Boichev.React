import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Registration from '../components/Registration.jsx';
import Login from '../components/Login.jsx';
import DataCapture from '../components/DataCapture.jsx';
import Navigation from '../components/Navigation.jsx';
import NotFound from '../components/NotFound.jsx';
import User from '../classes/User.jsx';

export default class SwitchWS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _user: new User()
        };
        this.handleUserChange = this.handleUserChange.bind(this);
    }

    handleUserChange(user) {
        this.setState({ _user: user });
    }
    render() {

        const firstname = this.state._user.firstname;
        const lastname = this.state._user.lastname;
        const ageuser = this.state._user.age;
        const dateOfBirth = this.state._user.dateOfBirth;
        const gender = this.state._user.gender;

        return (
            <Switch>
                <Route exact path={`/SingUp`}>
                    <Registration handleSaveChange={this.handleUserChange}> </Registration>
                </Route>
                <Route exact path={"/SingIn"} component={Login} />
                <Route exact path={"/MySite"}>
                    <DataCapture firstName={`${firstname}`} 
                                lastName={`${lastname}`} 
                                age={`${ageuser}`} 
                                dateOfBirth={`${dateOfBirth}`} 
                                gender={`${gender}`}>
                    </DataCapture>
                </Route>
                <Route exact path="/" component={Navigation} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}