import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';

import User  from '../classes/User.jsx';


export default class Registation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            _firstName: "",
            _lastName: "",
            _age: '0',
            _aboutMe: "" 
        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeAboutMe = this.onChangeAboutMe.bind(this);

        this.Save = this.Save.bind(this);

    }
    onChangeFirstName(event){
        let firstName = event.target.value;
        this.setState({_firstName: firstName});
    }
    onChangeLastName(event){
        let lastName = event.target.value;
        this.setState({_lastName: lastName});
    }
    onChangeAge(event){
        let age = event.target.value;
        this.setState({_age: age});
    }
    onChangeAboutMe(event){
        let aboutMe = event.target.value;
        this.setState({_aboutMe: aboutMe});
    }
    Save(){
        let user = new User();
        user.firstname = this.state._firstName;
        user.lastname = this.state._lastName;
        user.age = this.state._age;
        user.aboutme = this.state._aboutMe;

        this.props.handleSaveChange(user);
    }
    render() {
        return (
            <form>
                <label>Name: </label>
                <input type='text' id='textFirstName' value={this.state._firstName} onChange={this.onChangeFirstName}/>
                <br></br>
                <label>Surname: </label>
                <input type='text' id='textLastName' value={this.state._lastName} onChange={this.onChangeLastName}/>
                <br></br>
                <label>Age: </label>
                <input type='text' id='textAge' value={this.state._age} onChange={this.onChangeAge}/>
                <br></br>
                <label>About me: </label>
                <input type='text' id='textAboutMe' value={this.state._aboutMe} onChange={this.onChangeAboutMe}/>
                <br></br>
                <Link to={`/MySite`} onClick={this.Save}>Save</Link>
            </form>
        )
    }
}

