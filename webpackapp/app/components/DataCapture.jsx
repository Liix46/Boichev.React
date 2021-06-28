import React from 'react';
export default class DataCapture extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            _firstName: this.props.firstName,
            _lastName: this.props.lastName,
            _age: this.props.age,
            _aboutMe: this.props.aboutMe 
        };

    }

    render() {
        return( <div>
            <p>Name: {this.state._firstName}</p>
            <p>Surname: {this.state._lastName}</p>
            <p>Age: {this.state._age}</p>
            <p>About me: {this.state._aboutMe}</p>
        </div>);
    }
}
