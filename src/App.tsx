import { render } from '@testing-library/react';
import React, {FunctionComponent, useState, useEffect } from 'react';
import { isConstructorDeclaration } from 'typescript';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import Menu from './Components/Menu/Menu'
import SignUp from './Components/Menu/SignUp'

type SessionState = {
  sessionToken: string
}

type NewSessionState = {
  newToken: string
}






class App extends React.Component<SessionState> {
  constructor(props: any) {
    super(props) 
    this.state= {
      sessionToken: '',
    }
  }

  
  
  componentDidMount= () => {
    if (localStorage.getItem('token')) {
    this.setState({
      sessionToken: localStorage.getItem('token')
    })
    
    let newToken = localStorage.getItem('token')
     function reviseToken(newToken: any) : Promise<any>
     this.componentDidCatch = () => {
       this.setState({
         sessionToken: newToken
       })
     }
     
     console.log('View setSessionTokan----->', newToken);
     console.log('View SessionToken ---> ', newToken);

     console.log('View token ---> ', localStorage.token)

    function clearToken() : Promise<void>
    this.componentDidCatch = () => {
      this.setState({
        sessionToken: ''
      })
    }
   
  }

 
  render(){

    return (
      <div>
        <Container>
          <Row>
            <Router>
              <Menu/>
            </Router>
          </Row>
        </Container>
        <Menu />

      </div>
    );
  }
}






export default App;
