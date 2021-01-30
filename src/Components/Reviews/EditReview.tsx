import React from 'react';
import { render } from '@testing-library/react';
import { Button, Form, FormGroup, Label, Input, Modal } from 'reactstrap';

type EditProps = {
    token: string,
    reviewid: number,
    


}

type EditState = {
    title: string,
    entry: string,
    editedReview: boolean,
    modal: boolean


}




class EditReview extends React.Component<EditProps, EditState> {
    constructor(props: EditProps) {
        super(props);
        this.state = {
            title: '',
            entry: '',
            editedReview: false,
            modal: false


        }
        this.editReview = this.editReview.bind(this)
        this.toggle = this.toggle.bind(this)

    }

    editReview(event: any) {
        event.preventDefault();
        fetch(`http://localhost:1906/review/${this.props.reviewid}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }),
            body: JSON.stringify({
                review: {
                    title: this.state.title,
                    entry: this.state.entry
                }
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                // window.location.reload(false)
            })
            .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.setState({
            title: '',
            entry: ''
        })
    }

    reviewEdited = () => {
        this.setState({
            editedReview: true
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
                <Button color="primary" class="review-button" onClick={this.toggle}>Edit Review</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    {
                        this.state.editedReview === true ?
                            <div>
                                <h3>Your review has been edited.</h3>
                            </div>
                            :
                            <div>
                                <h3 className="current-module" >Edit Review</h3>
                                <Form onSubmit={this.editReview}>
                                    <FormGroup>
                                        <Label for="title"> </Label>
                                        <Input type="text" name="title" id="review-title" required placeholder="edit title" onChange={(e) => this.setState({ title: e.target.value })} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="entry"> </Label>
                                        <Input type="text" name="entry" id="review-entry" required placeholder="edit review entry" onChange={(e) => this.setState({ entry: e.target.value })} />
                                    </FormGroup>
                                    <Button onClick={this.toggle}>Submit</Button>
                                    <Button onClick={this.toggle}>Cancel</Button>
                                </Form>
                            </div>
                    }
                </Modal>


            </div>



        )

    }
}

export default EditReview;