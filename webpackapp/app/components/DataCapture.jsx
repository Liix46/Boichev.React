let React = require('react');
let Registration = require('./Registation.jsx');

class DataCapture extends React.Component {
    constructor() {
        super();
        this.state = { 
            _firstName: "",
            _lastName: "",
            _age: 18,
            _aboutMe: "" 
        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeAboutMe = this.onChangeAboutMe.bind(this);
        this.press = this.press.bind(this);

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
    press(event){
        event.preventDefault();
        return(
            <Registration _firstName={this._firstName} _lastName={this._lastName} _age={this._age} _aboutMe={this._aboutMe}></Registration>
        )
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
                <button onClick ={this.press}>Submit</button>
            </form>
        )
    }
}

module.exports = DataCapture;