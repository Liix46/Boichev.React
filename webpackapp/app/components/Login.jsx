import React from 'react';
import '../../public/css/Login.module.css'
import '../../public/dinamic/login.js'
export default class NotFound extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="login-container">
                    <div id="output"></div>
                    <div class="avatar"></div>
                    <div class="form-box">
                        <form action="" method="">
                            <input name="user" type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button class="btn btn-info btn-block login" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}