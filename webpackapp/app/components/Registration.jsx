import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import User from '../classes/User.jsx';
import '../../public/css/Registration.module.css'


export default class Registation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _avatar: "",
            _firstName: "",
            _lastName: "",
            _email: "",
            _password: "",
            _confirmPassword: "",
            _dateOfBirth: "",
            _gender: ""
        };
        this.onChangeAvatar = this.onChangeAvatar.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);

        this.Save = this.Save.bind(this);

    }

    onChangeAvatar(event){
        let path = event.target.value;
        this.setState({_avatar: path});
        
    }

    onChangeFirstName(event) {
        let firstName = event.target.value;
        this.setState({ _firstName: firstName });
    }
    onChangeLastName(event) {
        let lastName = event.target.value;
        this.setState({ _lastName: lastName });
    }
    onChangeEmail(event) {
        let email = event.target.value;
        this.setState({ _email: email });
    }
    onChangePassword(event) {
        let password = event.target.value;
        this.setState({ _password: password });
    }
    onChangeConfirmPassword(event) {
        let confirmPassword = event.target.value;
        this.setState({ _confirmPassword: confirmPassword });
    }
    onChangeDateOfBirth(event) {
        let dateOfBirth = event.target.value;
        this.setState({ _dateOfBirth: dateOfBirth });
    }

    onChangeGender(event) {
        let gender = event.target.value;
        this.setState({ _gender: gender });
    }
    Save() {
        let user = new User();

        if(this.state._avatar !== ""){
            user.avatar = this.state._avatar; 
            console.log(user.avatar);
        }
        else{
            user.avatar = "../../public/src/noFace.jpg";
        }
        
        user.firstname = this.state._firstName;
        user.lastname = this.state._lastName;

        // check password
        user.password = this.state._password
        user.dateOfBirth = this.state._dateOfBirth;
        user.gender = this.state._gender;

        this.props.handleSaveChange(user);
    }
    render() {
        return (
            <div className="mainBlock">
                <table className="tableRegistration">
                    <tbody className="bodyTable">
                        <tr>
                            <td>
                                <label>Avatar: </label>
                            </td>
                            <td>
                                <input type="file" value={this.state._avatar} onChange={this.onChangeAvatar}></input>                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>First name: </label>
                            </td>
                            <td>
                                <input type='text' value={this.state._firstName} onChange={this.onChangeFirstName} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Last name: </label>
                            </td>
                            <td>
                                <input type='text' value={this.state._lastName} onChange={this.onChangeLastName} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email*: </label>
                            </td>
                            <td>
                                <input type='email' value={this.state._email} onChange={this.onChangeEmail} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password*: </label>
                            </td>
                            <td>
                                <input type='password' value={this.state._password} onChange={this.onChangePassword} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Confirm password*: </label>
                            </td>
                            <td>
                                <input type='password' value={this.state._confirmPassword} onChange={this.onChangeConfirmPassword} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Date of birth*: </label>
                            </td>
                            <td>
                                <input type='date' value={this.state._dateOfBirth} onChange={this.onChangeDateOfBirth} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Gender: </label>
                            </td>
                            <td>
                                <div className="divGender">
                                    <label>Male</label>
                                    <input type='radio' checked={this.state._gender === "Male"} name="Radio" value="Male" onChange={this.onChangeGender} />
                                    <label>Female</label>
                                    <input type='radio' checked={this.state._gender === "Female"} name="Radio" value="Female" onChange={this.onChangeGender} />
                                </div>

                            </td>
                        </tr>
                        <tr className="rowForButton">
                            <td>
                                <Link to={`/MySite`} onClick={this.Save} type="button" className="btn btn-primary SaveButton">Save</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

