import React from 'react'
import { updateShorthandPropertyAssignment } from 'typescript';

type AcceptedProps = {
    reviseToken: (newToken: string) => void,
    clearToken: () => void
}

type SignInState = {
    username: string,
    password: string,
    setUserLoggedin: boolean
};


class SignIn extends React.Component<AcceptedProps, SignInState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            setUserLoggedin: false

        }
    }

    signIn(event: any) {
        event.preventDefault();
        console.log('testing signin')
        fetch('http://localhost:1906/user/signin', {
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
            })
    }

    componentDidMount = () => {

    }
    render() {
        return (
            <div>Anything</div>
        )
    }
}

export default SignIn;