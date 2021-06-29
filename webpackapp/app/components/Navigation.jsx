import React from 'react';
import { Link } from 'react-router-dom';

import '../../public/css/Navigation.module.css';

export default class Navigation extends React.Component {
    render() {
        return <div className="main">
            <h1 className="WelcomeBlock"> Welcome, in</h1>
            <br></br>
            <h1 className="WelcomeBlock">Social Networking.</h1>
            <br></br>
            <h3 className="timeBlock">It's time to say...</h3>
            <table className="mainTable">
                <tbody >
                    <tr>
                        <td><Link to="/singUp" type="button" className="btn btn-primary linkNavigation">Sing up</Link></td>
                        <td><Link to="/singIn" type="button" className="btn btn-primary linkNavigation">Sing in</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}