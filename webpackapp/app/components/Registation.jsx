let React = require('react');

class Registration extends React.Component {

    constructor(props){
        super(props);
        this.state = {_firstName: this.props.firstName};
        this.state = {_lastName: this.props.lastName};
        this.state = {_age: this.props.age};
        this.state = {_aboutMe: this.props.aboutMe};

    }

    render() {
        return( <div>
            <p>Name: {this._firstName}</p>
            <p>Surname: {this._lastName}</p>
            <p>Age: {this.props._age}</p>
            <p>About me: {this.props._aboutMe}</p>
        </div>);
    }
}

module.exports = Registration;