let React = require('react');
let user = require('../classes/User.jsx');
class DataCapture extends React.Component {
    constructor(props){
        debugger;
        super(props);
        this.state = { 
            _firstName: user.firstName,
            _lastName: this.props.lastName,
            _age: this.props.age,
            _aboutMe: this.props.aboutMe 
        };

    }

    render() {
        debugger;
        return( <div>
            <p>Name: {this._firstName}</p>
            <p>Surname: {this._lastName}</p>
            <p>Age: {this.props._age}</p>
            <p>About me: {this.props._aboutMe}</p>
        </div>);
    }
}
module.exports = DataCapture;