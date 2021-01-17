import React, { useImperativeHandle } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
type AcceptedProps = {
    reviseToken: (newToken: string) => void,
    clearToken: () => void
}

type UserState = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    admin: boolean,
    businessOwner: boolean,
    setUserSignup: boolean
}


class SignUp extends React.Component<AcceptedProps, UserState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            admin: false,
            businessOwner: false,
            setUserSignup: false,
        }
    }



    signUp(event: any) {
        fetch('http://localhost:1906/user/signup', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(result => {
                this.props.reviseToken(result.sessionToken)
                console.log('Signup completed.')
                localStorage.setItem('SignUp', JSON.stringify({
                    signUp: true,
                    token: result.token
                }))

            })
    }
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={this.signUp}>
                    <FormGroup>
                        <label id="username">username</label>
                        <Input pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Please use letters and numbers for your username. The minimum length is 8 characters." type="text" name="username" value={this.state.username} placeholder="Please enter your username." minimumLength="8" required 
                        onChange={(e) => this.setState({ username: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <label id="password">password</label>
                        <Input type="password" name="password" value={this.state.password} placeholder="Please enter your password here" minimumLength="8" required onChange={(e) => this.setState({password : e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <label id="admin">Admin</label>
                        <Input type="checkbox" name="admin" required onClick={(e) => this.setState({admin : true})} />
                    </FormGroup>
                    <FormGroup>
                        <label id="businessOwner">Business Owner</label>
                        <Input type="checkbox" name="businessOwner" required onClick={(e) => this.setState({admin : true})} />
                    </FormGroup>
                    <Button id="Sign Up"onClick={(e) => this.setState({setUserSignup : true})}>
                        SignUp     
                    </Button>


                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SignUp;