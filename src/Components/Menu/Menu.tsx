import React from 'react'
import {Button, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';





class Menu extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render(){
        return (
        <Router> 
            <div className="menu">
                <Button><Link to="/">Home</Link></Button>
                <Button><Link to="SignUp">Sign Up</Link></Button>
                <Button><Link to="SignIn">Sign In</Link></Button>
                <Button >Logout</Button>
            </div>
        </Router>
        )
    }
}

export default Menu;