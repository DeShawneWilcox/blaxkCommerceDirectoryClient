import { render } from '@testing-library/react';
import React from 'react';
import { isConstructorDeclaration } from 'typescript';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import Menu from './Components/Menu/Menu'
import SignUp from './Components/Menu/SignUp'
import Review from './Components/Reviews/Review'




type SessionState = {
  token: string,
  sessionToken: string,
  newToken: string,
  adminToken: string,
  businessToken: string
};




class App extends React.Component<{},SessionState> {
  constructor(props: SessionState) {
    super(props)
    this.state= {
      token: '',
      sessionToken: '',
      newToken: '',
      adminToken: '',
      businessToken: ''
    } 
   
  }

  
  
  componentDidMount= () => {
    if (localStorage.getItem('token')) {
    this.setState({
      sessionToken: localStorage.getItem('token')||'',
      token: localStorage.getItem('token')|| '',
      newToken: localStorage.getItem('token')|| '',
      adminToken: localStorage.getItem('token')|| '',
      businessToken: localStorage.getItem('token')|| ''
    })
    
    
   
  }
}

reviseToken  (newToken: string)  {
  this.componentDidCatch = () => {
   this.setState({
     sessionToken: newToken
   })
   
 }
 console.log('View SessionToken ---> ', newToken);
 }

clearToken () {
this.componentDidCatch = () => {
  localStorage.clear()
  this.setState({
    sessionToken: ''
  })
}


console.log('Confirm token is cleared.', localStorage.token);
}

protectedViews = (props: SessionState) => {
  return (this.state.sessionToken === localStorage.getItem('token') ? <Review token={this.state.token} sessionToken={this.state.sessionToken}  /> 
  : <p id="tokenissue">Sign Up or Sign In to have access to this content.</p>)
}


  render() {
   return (
      <div>
        <Container>
          <Row>
            <Router>
              <Menu reviseToken={this.reviseToken} clearToken={this.clearToken} token={this.state.token} sessionToken={this.state.sessionToken}/>
              <SignUp reviseToken={this.reviseToken} clearToken={this.clearToken} token={this.state.token} sessionToken={this.state.sessionToken}/>
            </Router>
          </Row>
          <Row>
            {this.protectedViews}
          </Row>
        </Container>
        

      </div>
    );
  }
}






export default App;
