import { render } from '@testing-library/react';
import React from 'react';
import { isConstructorDeclaration } from 'typescript';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import Menu from './Components/Menu/Menu'
import SignUp from './Components/Menu/SignUp'
import Review from './Components/Reviews/Review'
import ViewReview from './Components/Reviews/ViewReview'
import Business from './Components/Businesses/Business';




type SessionState = {
  token: string,
  sessionToken: string,
  newToken: string,
  adminToken: string,
  businessToken: string,
  addReview: boolean,
  review: any,
  reviewid: any,
  reviewRes: any,
  title: string,
  entry: string,
  business: any,
  businessid: any,
  businesRes: any,
  businessOwner: string,
  businessName: string,
  address: string,
  zipcode: number,
  businessFunction: string

};





class App extends React.Component<{}, SessionState> {
  constructor(props: SessionState) {
    super(props)
    this.state = {
      token: '',
      sessionToken: '',
      newToken: '',
      adminToken: '',
      businessToken: '',
      addReview: false,
      review: '',
      reviewid: null,
      reviewRes: [],
      title: '',
      entry: '',
      business: '',
      businessid: null,
      businesRes: [],
      businessOwner: '',
      businessName: '',
      address: '',
      zipcode: 0,
      businessFunction: ''
    }
    this.reviseToken = this.reviseToken.bind(this)
    this.clearToken = this.clearToken.bind(this)

  }



  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      this.setState({
        sessionToken: localStorage.getItem('token') || '',
        token: localStorage.getItem('token') || '',
        newToken: localStorage.getItem('token') || '',
        adminToken: localStorage.getItem('token') || '',
        businessToken: localStorage.getItem('token') || ''
      })



    }
  }

  reviseToken(newToken: string) {
    localStorage.setItem('token', newToken)
    this.setState({
      token: newToken, sessionToken: newToken
    })




    console.log('View SessionToken ---> ', newToken);
  }

  clearToken(e: any) {
    e.preventDefault()
    // this.componentDidCatch = () => {
    localStorage.clear()
    this.setState({
      sessionToken: '', token: ''
    })
    // this.clearToken = this.clearToken.bind(this)
    // }


    console.log('Confirm token is cleared.', localStorage.token);
  }





  render() {
    return (
      <div>
        <Container>
          <Row>
            <Router>
              <Menu reviseToken={this.reviseToken} clearToken={this.clearToken} token={this.state.token} sessionToken={this.state.sessionToken} />





            </Router>
          </Row>
          <Row>

          </Row>
          <Row>
            {this.state.token === localStorage.getItem('token') ? <Business businessid={this.state.businessid} token={this.state.token} sessionToken={this.state.sessionToken} businessToken={this.state.businessToken} />
              : <p id="tokenissue">Sign Up or Sign In to have access to this content.</p>}
          </Row>
        </Container>


      </div>
    );
  }
}






export default App;
