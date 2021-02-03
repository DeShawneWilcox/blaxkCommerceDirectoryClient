import React from 'react'
import { Button, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Review from '../Reviews/Review'

type MenuProps = {
    reviseToken: (newToken: string) => void,
    clearToken: (e: any) => void,
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
                    <Button className="menubutton"  size="lg"><Link to="/">Home</Link></Button>
                    <Button className="menubutton" size="lg"><Link to="SignUp">Sign Up</Link></Button>
                    <Button className="menubutton" size="lg"><Link to="SignIn">Sign In</Link></Button>
                    <Button className="menubutton" size="lg" onClick={this.props.clearToken}>Logout</Button>
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