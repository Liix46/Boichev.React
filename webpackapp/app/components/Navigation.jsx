import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
export default class Navigation extends React.Component{
    render(){
        return <div>
            <Link to="/singUp">Sing up</Link>  
            <br></br>              
            <Link to="/singIn">Sing in</Link>
              </div>;
    }
}