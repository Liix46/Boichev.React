import React from 'react';
import {Link}  from 'react-router-dom';

import '../../public/css/Navigation.module.css';
 
export default class Navigation extends React.Component{
    render(){
        return <div className="main">
            <Link to="/singUp" type="button" className="btn btn-primary ">Sing up</Link>  
            <br></br>              
            <Link to="/singIn" type="button" className="btn btn-primary">Sing in</Link>
              </div>;
    }
}