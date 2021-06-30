import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/css/DataCapture.module.css'
export default class DataCapture extends React.Component {
    constructor(props) {
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
        return (
            <div className="mainDataCaptureBlock">
                <header className="burgerBlock">
                    {/* third block burger menu 3*/}
                </header>
                <div className="imgBlock">
                    {/* first block for image user */}
                    <img src="../../public/src/noFace.jpg"></img>
                </div>
                <div className="infoBlock">
                    {/* second block for info user and button <changeInfo> - change user data*/}
                    <p>Name: {this.state._firstName}</p>
                    <p>Surname: {this.state._lastName}</p>
                    <p>Date of birth: {this.state._dateOfBirth}</p>
                    <p>Gender: {this.state._gender}</p>
                    <p>About me: {this.state._aboutMe}</p>
                </div>

                <div className="wallBlock">
                </div>
                <div className="changeBlock">
                    <Link to="/changedata" type="button" className="btn btn-primary ">Change</Link>
                </div>
                <footer className="footerBlock">
                </footer>
            </div>);
    }
}
