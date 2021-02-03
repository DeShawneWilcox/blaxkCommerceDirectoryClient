import React from 'react';
import { render } from '@testing-library/react';
import ReviewCard from './ReviewCard';
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap';
type ViewProps = {
    token: string
    businessid: number
}
type ViewReviewState = {
    reviewRes: any,
    modal: boolean
}

class ViewReview extends React.Component<ViewProps, ViewReviewState> {
    constructor(props: ViewProps) {
        super(props);
        this.state = {
            reviewRes: [],
            modal: false
        }
        this.viewReviews = this.viewReviews.bind(this)
        this.toggle = this.toggle.bind(this)

    }


    viewReviews() {

        console.log('Id in the get review fetch', this.props.businessid)
        fetch(`http://localhost:1906/review/reviews/${this.props.businessid}`,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                })
            })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    reviewRes: result
        
                })
                console.log('set review res', this.state.reviewRes);
                console.log('view reviews', result)
            })
            .catch(error => console.log('error', error));



    }

    componentDidMount = () => {
    
        this.viewReviews()
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }





    render() {
        return (
            <div>
                 
                
                 <ReviewCard  reviewRes={this.state.reviewRes} token={this.props.token} businessid={this.props.businessid} />

                
                
            </div>


        )

    }
}

export default ViewReview