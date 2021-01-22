import React, { useImperativeHandle } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
type SignUpProps = {
    token: string,
    sessionToken: string,
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


class SignUp extends React.Component<SignUpProps, UserState> {
    constructor(props: SignUpProps) {
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
        this.signUp=this.signUp.bind(this)
    }



    signUp(event: any) {
        event.preventDefault()
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
                // localStorage.setItem('SignUp', JSON.stringify({
                //     signUp: true,
                //     token: result.token
                // }))
                // history.push('/');
                // window.location.reload(true);

            })
            .catch(error=> console.log('error', error));
            
    }

    componentDidMount = () => {
        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            admin: true,
            businessOwner: true,
           setUserSignup: true
            
        })
    }
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={this.signUp}>
                    <FormGroup>
                        <label id="firstname">First Name</label>
                        <Input title="Please enter your first name." type="text" name="firstname" value={this.state.firstName} placeholder="Please enter your first name." minimumLength={2} required onChange={(e) => this.setState( { firstName: e.target.value })}/>
                    </FormGroup>
                    <FormGroup>
                        <label id="lastname">Last Name</label>
                        <Input title="Please enter your last name." type="text" name="lastname" value={this.state.lastName} placeholder="Please enter your last name." minimumLength={2} required onChange={(e) => this.setState( { lastName: e.target.value })}/>
                    </FormGroup>
                    <FormGroup>
                        <label id="username">Username</label>
                        <Input pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Please use letters and numbers for your username. The minimum length is 8 characters." type="text" name="username" value={this.state.username} placeholder="Please enter your username." minimumLength={8} required 
                        onChange={(e) => this.setState({ username: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <label id="password">Password</label>
                        <Input type="password" name="password" value={this.state.password} placeholder="Please enter your password here" minimumLength={8} required onChange={(e) => this.setState({password : e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <label id="admin">Admin</label>
                        <Input type="checkbox" name="admin" required onClick={(e) => this.setState({admin : true})} />
                    </FormGroup>
                    <FormGroup>
                        <label id="businessOwner">Business Owner</label>
                        <Input type="checkbox" name="businessOwner" required onClick={(e) => this.setState({admin : true})} />
                    </FormGroup>
                    <Button id="Sign Up">
                        SignUp     
                    </Button>
                </Form>
            </div>
        )
    }
}

export default SignUp;