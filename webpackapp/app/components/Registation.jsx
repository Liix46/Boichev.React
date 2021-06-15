let React = require('react');

class Registration extends React.Component {

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
            <p>Name: {this._firstName}</p>
            <p>Surname: {this._lastName}</p>
            <p>Age: {this.props._age}</p>
            <p>About me: {this.props._aboutMe}</p>
        </div>);
    }
}
//Registration.defaultProps = {firstName: "User",lastName:"", age: 18, aboutMe: "Nothing"};
module.exports = Registration;