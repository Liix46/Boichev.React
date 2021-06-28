import React from 'react';
export default class DataCapture extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            _firstName: this.props.firstName,
            _lastName: this.props.lastName,
            _dateOfBirth: this.props.dateOfBirth,
            _gender: this.props.gender,
            _aboutMe: ""
        };

    }

    render() {
        return( <div>
            <p>Name: {this.state._firstName}</p>
            <p>Surname: {this.state._lastName}</p>
            <p>Date of birth: {this.state._dateOfBirth}</p>
            <p>Gender: {this.state._gender}</p>
            <p>About me: {this.state._aboutMe}</p>
        </div>);
    }
}
