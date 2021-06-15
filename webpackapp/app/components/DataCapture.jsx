let React = require('react');
let Registration = require('./Registation.jsx');

class DataCapture extends React.Component {
    constructor() {
        super();
        this.state = { _firstName: "" };
        this.state = { _lastName: "" };
        this.state = { _age: 18 };
        this.state = { _aboutMe: "" };
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
        let age = parseInt(event.target.value);
        this.setState({_age: age});
    }
    onChangeAboutMe(event){
        let aboutMe = event.target.value;
        this.setState({_aboutMe: aboutMe});
    }
    press(){
        return(
            <Registration _firstName={this._firstName} _lastName={this._lastName} _age={this._age} _aboutMe={this._aboutMe}></Registration>
        )
    }

    render() {
        return (
            <input>
                <text id='textFirstName' value={this.state._firstName} onChange={this.onChangeFirstName}></text>
                <text id='textLastName' value={this.state._lastName} onChange={this.onChangeLastName}></text>
                <text id='textAge' value={parseInt(this.state._age)} onChange={this.onChangeAge}></text>
                <text id='textAboutMe' value={this.state._aboutMe} onChange={this.onChangeAboutMe}></text>
                <button onClick ={this.press}>Submit</button>
            </input>

        )
    }
}

module.exports = DataCapture;