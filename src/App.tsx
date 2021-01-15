import { render } from '@testing-library/react';
import React, {FunctionComponent, useState, useEffect } from 'react';
import { isConstructorDeclaration } from 'typescript';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import Menu from './Components/Menu/Menu'
import SignUp from './Components/Menu/SignUp'




type SessionState = {
  sessionToken: string|null
  newToken: string
};




class App extends React.Component<{},SessionState> {
  constructor(props: SessionState) {
    super(props) 
   
  }

  
  
  componentDidMount= () => {
    if (localStorage.getItem('token')) {
    this.setState({
      sessionToken: localStorage.getItem('token')
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
  render() {
   return (
      <div>
        <Container>
          <Row>
            <Router>
              <Menu />
              <SignUp reviseToken={this.reviseToken} clearToken={this.clearToken}/>
            </Router>
          </Row>
        </Container>
        <Menu />

      </div>
    );
  }
}






export default App;
