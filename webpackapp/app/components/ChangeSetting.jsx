import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import User from '../classes/User.jsx';
import '../../public/css/ChangeSetting.module.css'

export default class ChangeSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _firstName: this.props.firstName,
            _lastName: this.props.lastName,
            _email: this.props.email,
            _password: this.props.password,
            _dateOfBirth: this.props.dateOfBirth,
            _gender: this.props.gender,
            _aboutMe: this.props.aboutMe
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAboutMe = this.onChangeAboutMe.bind(this);

        this.Save = this.Save.bind(this);
    }

    onChangeFirstName(event) {
        let firstName = event.target.value;
        this.setState({ _firstName: firstName });
    }
    onChangeLastName(event) {
        let lastName = event.target.value;
        this.setState({ _lastName: lastName });
    }
    onChangeDateOfBirth(event) {
        let dateOfBirth = event.target.value;
        this.setState({ _dateOfBirth: dateOfBirth });
    }

    onChangeGender(event) {
        let gender = event.target.value;
        this.setState({ _gender: gender });
    }
    onChangeAboutMe(event){
        let aboutMe = event.target.value;
        this.setState({_aboutMe: aboutMe});

    }

    Save() {
        let user = new User();
        user.firstname = this.state._firstName;
        user.lastname = this.state._lastName;
        user.dateOfBirth = this.state._dateOfBirth;
        user.gender = this.state._gender;
        user.password = this.state._password;
        user.email = this.state._email;
        user.aboutme = this.state._aboutMe;

        console.log(user);

        this.props.handleSaveChange(user);
    }

    render() {
        return (
            <div className="settingBlock">
                <table className="tableSetting">
                    <tbody className="bodyTableSetting">
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
                                <div className="divGenderSetting">
                                    <label>Male</label>
                                    <input type='radio' checked={this.state._gender === "Male"} name="Radio" value="Male" onChange={this.onChangeGender} />
                                    <label>Female</label>
                                    <input type='radio' checked={this.state._gender === "Female"} name="Radio" value="Female" onChange={this.onChangeGender} />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label>About me: </label>
                            </td>
                            <td>
                                <textarea value={this.state._aboutMe} onChange={this.onChangeAboutMe} className="textAreaSetting"/>
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