import React from 'react'
import { Button, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

type MenuProps = {
    reviseToken: (newToken: string) => void,
    clearToken: () => void,
    sessionToken: string,
    token: string
    
}





class Menu extends React.Component<MenuProps,{}> {
    constructor(props:MenuProps) {
        super(props)
    }

    
    render() {
        return (
            <Router>
                <div className="menu">
                    <Button><Link to="/">Home</Link></Button>
                    <Button><Link to="SignUp">Sign Up</Link></Button>
                    <Button><Link to="SignIn">Sign In</Link></Button>
                    <Button >Logout</Button>
                </div>
                <div className="menu-route">
                    <Switch>
                        <Route exact path="/"></Route>
                        <Route exact path="/signup"><SignUp token={this.props.token}sessionToken={this.props.sessionToken} reviseToken={this.props.reviseToken} clearToken={this.props.clearToken} /></Route>
                        <Route exact path="/signin"><SignIn token={this.props.token} sessionToken={this.props.sessionToken} reviseToken={this.props.reviseToken} clearToken={this.props.clearToken} /></Route>
                    </Switch>
                </div>


            </Router>
        )
    }
}

export default Menu;