import React from 'react';
import { Link } from 'react-router-dom';

import '../../public/css/Navigation.module.css';

export default class Navigation extends React.Component {
    render() {
        return <div className="main">
            <h1> Welcome, Social Networking.</h1>
            <h3>It's time to say...</h3>
            <table className="mainTable">
                <tbody>
                    <tr>
                        <td><Link to="/singUp" type="button" className="btn btn-primary ">Sing up</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/singIn" type="button" className="btn btn-primary">Sing in</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}