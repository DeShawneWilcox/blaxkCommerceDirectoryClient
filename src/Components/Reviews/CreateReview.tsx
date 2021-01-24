import React from 'react';
import { render } from '@testing-library/react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

type CreateReviewProps = {
    title: any,
    entry: any,
    reviewRes: any,
    review: any,
    sessionToken: string,
    token: string,
    reviewid: any


}

type CreateReviewState = {
    title: string,
    entry: string,
    submittedReview: boolean
}


class CreateReview extends React.Component<CreateReviewProps, CreateReviewState> {
    constructor(props: CreateReviewProps) {
        super(props);
        this.state = {
            title: '',
            entry: '',
            submittedReview: false
        }
        this.createReview = this.createReview.bind(this)
    }

    createReview(event: any) {
        event.preventDefault();
        fetch('http://localhost:1906/review/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }),
            body: JSON.stringify({
                'review': {
                    'title': this.state.title,
                    'entry': this.state.entry

                }
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.setState({
            title: '',
            entry: '',
            submittedReview: true

        })

    }





    render(): any {
        return (
            <div>
                {
                    this.state.submittedReview === true ?
                        null
                        :
                        <div>
                            <h3>Create Question</h3>

                            <Form onSubmit={this.createReview}>
                                <FormGroup>
                                    <Label for="title"></Label>
                                    <Input type="text" name="title" value={this.state.title} id="review-title-entry" required placeholder="please enter a review title" onChange={(e) => this.setState({ title: e.target.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="entry"></Label>
                                    <Input type="text" name="title" value={this.state.entry} id="review-entry" required placeholder="please enter a review" onChange={(e) => this.setState({ entry: e.target.value })} />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </div>
                }
            </div>



        )

    }
}


export default CreateReview;;