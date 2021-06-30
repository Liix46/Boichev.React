import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/DataCapture.module.css'
export default class DataCapture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _avatar: this.props.avatar,
            _firstName: this.props.firstName,
            _lastName: this.props.lastName,
            _dateOfBirth: this.props.dateOfBirth,
            _gender: this.props.gender,
            _aboutMe: this.props.aboutMe
        };

    }

    render() {
        return (
            <div className="mainDataCaptureBlock">
                <header className="burgerBlock">
                    {/* third block burger menu 3*/}
                </header>
                <div className="imgBlock">
                    {/* first block for image user */}
                    <img src={`${this.state._avatar}`}></img>
                </div>
                <div className="infoBlock">
                    {/* second block for info user and button <changeInfo> - change user data*/}
                    <p></p>
                    <p>{this.state._firstName} {this.state._lastName}</p>
                    <p>{this.state._dateOfBirth}</p>
                    <p>{this.state._gender}</p>
                    <p>{this.state._aboutMe}</p>
                </div>

                <div className="wallBlock">
                </div>
                <div className="changeBlock">
                    <Link to="/setting_user" type="button" className="btn btn-primary ">Change</Link>
                </div>
                <footer className="footerBlock">
                </footer>
            </div>);
    }
}
