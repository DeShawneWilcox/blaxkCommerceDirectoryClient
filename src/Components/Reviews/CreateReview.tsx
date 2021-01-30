import React from 'react';
import { render } from '@testing-library/react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

type CreateReviewProps = {
    token: string
    businessid: number

}

type CreateReviewState = {
    title: string,
    entry: string,
    businessid: any,
    submittedReview: boolean,
    modal: boolean
}


class CreateReview extends React.Component<CreateReviewProps, CreateReviewState> {
    constructor(props: CreateReviewProps) {
        super(props);
        this.state = {
            title: '',
            entry: '',
            businessid: 0,
            submittedReview: false,
            modal: false
        }
        console.log('review token --->', this.props.token)
         this.createReview = this.createReview.bind(this)
         this.toggle = this.toggle.bind(this)
    }

    createReview(event: any) {
        event.preventDefault();
        fetch('http://localhost:1906/review/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token,
            }),
            body: JSON.stringify({
                review: {
                    title: this.state.title,
                    entry: this.state.entry,
                    businessid: this.props.businessid

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
            entry: ''
            

        })



    }

    reviewEntered = () => {
        this.setState({
            submittedReview: true

        })
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }





    render(): any {
        return (
            <div>
                {this.state.submittedReview === true ?
                    null
                    :
                    <div>
                        <h3>Create Review</h3>
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


export default CreateReview;