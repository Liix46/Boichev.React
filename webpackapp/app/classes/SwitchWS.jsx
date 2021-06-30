import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Registration from '../components/Registration.jsx';
import Login from '../components/Login.jsx';
import DataCapture from '../components/DataCapture.jsx';
import ChangeSetting from '../components/ChangeSetting.jsx';
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
        const dateOfBirth = this.state._user.dateOfBirth;
        const gender = this.state._user.gender;

        const email = this.state._user.email;
        const password = this.state._user.password;
        const aboutMe = this.state._user.aboutme;

        return (
            <Switch>
                <Route exact path={`/SingUp`}>
                    <Registration handleSaveChange={this.handleUserChange}> </Registration>
                </Route>
                <Route exact path={"/SingIn"} component={Login} />
                <Route exact path={"/MySite"}>
                    <DataCapture firstName={`${firstname}`} 
                                lastName={`${lastname}`} 
                                dateOfBirth={`${dateOfBirth}`} 
                                gender={`${gender}`}
                                aboutMe={`${aboutMe}`}>
                    </DataCapture>
                </Route>
                <Route exact path={`/setting_user`}>
                    <ChangeSetting handleSaveChange={this.handleUserChange} 
                                    firstName={`${firstname}`} 
                                    lastName={`${lastname}`} 
                                    dateOfBirth={`${dateOfBirth}`} 
                                    gender={`${gender}`}
                                    aboutMe={`${aboutMe}`}
                                    email={`${email}`} 
                                    password={`${password}`} 
                    > </ChangeSetting>
                </Route>
                <Route exact path="/" component={Navigation} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}