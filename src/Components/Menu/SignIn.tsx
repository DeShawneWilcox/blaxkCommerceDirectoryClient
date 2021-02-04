import React from 'react'
import { updateShorthandPropertyAssignment } from 'typescript';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import APIURL from '../../helpers/environment'



type SignInProps = {
    token: string,
    sessionToken: string,
    reviseToken: (newToken: string) => void,
    clearToken: (e: any) => void
}

type SignInState = {
    username: string,
    password: string,
    setUserLoggedin: boolean,
    redirect: boolean
};


class SignIn extends React.Component<SignInProps, SignInState> {
    constructor(props: SignInProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            setUserLoggedin: false,
            redirect: false
        

        }
        this.signIn = this.signIn.bind(this)
    }



    signIn(event: any) {
        event.preventDefault();
        console.log('testing signin')
        fetch(`${APIURL}/user/signin`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type':
                    'application/json'
            }),
            body: JSON.stringify(this.state),
        })
            .then(response => response.json())
            .then(result => {
                this.props.reviseToken(result.sessionToken)
                console.log('sign in completed')

                // history.push('/');
                window.location.reload(true);

            })
            .catch(err => console.log(err))




    }


    componentDidMount = () => {
        this.setState({
            username: '',
            password: '',
            setUserLoggedin: true,
            redirect: true

        })
    }
    // setRedirect = () => {
    //     this.setState({
    //         redirect: true
    //     })
    // }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='review/' />
        }
    }
    render() {
        return (
            <div>
                <h1 className="signinhead">Sign In</h1>
                <Form className="SignInForm"onSubmit={this.signIn}>
                    <FormGroup className="signinform">
                        <label id="username">Username:</label>
                        <Input pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Please use letters and numbers for your username. The minimum length is 8 characters." type="text" name="username" value={this.state.username} placeholder="Please enter your username." minimumLength={8} required
                            onChange={(e) => this.setState({ username: e.target.value })} />
                    </FormGroup>
                    <FormGroup className="signinform">
                        <label id="password">Password:</label>
                        <Input type="password" name="password" value={this.state.password} placeholder="Please enter your password here" minimumLength={8} required onChange={(e) => this.setState({ password: e.target.value })} />
                    </FormGroup>
                    <Button id="SignIn">SignIn
                    </Button>

                </Form>
            </div>
        )
    }
}

export default SignIn;