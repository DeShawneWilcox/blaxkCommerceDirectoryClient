import { render } from '@testing-library/react';
import React, {FunctionComponent, useState, useEffect } from 'react';
import { isConstructorDeclaration } from 'typescript';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import Menu from './Components/Menu/Menu'
import SignUp from './Components/Menu/SignUp'


type MyProps = {
  
  
}

type SessionState = {
  sessionToken: string
  newToken: string
};








class App extends React.Component<SessionState> {
  constructor(props: SessionState) {
    super(props) 
   
  }

  
  
  componentDidMount= () => {
    if (localStorage.getItem('token')) {
    this.setState({
      sessionToken: localStorage.getItem('token')
    })
    
    let newToken = localStorage.getItem('token')
     
     
     
    //  console.log('View setSessionTokan----->', newToken);
    //  console.log('View SessionToken ---> ', newToken);

    //  console.log('View token ---> ', localStorage.token)

    // function clearToken() : Promise<void>
    // this.componentDidCatch = () => {
    //   this.setState({
    //     sessionToken: ''
    //   })
    // }
   
  }
}

reviseToken  (newToken: string)  {
  this.componentDidCatch = () => {
   this.setState({
     sessionToken: newToken
   })
 }
 }

clearToken () {
this.componentDidCatch = () => {
  this.setState({
    sessionToken: localStorage.clear()
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
              <SignUp/>
            </Router>
          </Row>
        </Container>
        <Menu />

      </div>
    );
  }
}






export default App;
