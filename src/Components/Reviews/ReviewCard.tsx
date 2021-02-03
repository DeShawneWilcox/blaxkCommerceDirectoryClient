import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CardBody, Card } from 'reactstrap';
import CreateReview from './CreateReview';
import ViewReview from './ViewReview';
import EditReview from './EditReview';
import DeleteReview from './DeleteReview';

import { render } from '@testing-library/react';

type ReviewCardProps = {
    //   review: any,
    //   reviewid: any,
    reviewRes: any,
    //   title: string,
    //   entry: string,
    token: string,
    businessid: number
}

type ReviewCardState = {
    reviewid: number,
    modal: boolean
    
}




class ReviewCard extends React.Component<ReviewCardProps, ReviewCardState> {
    constructor(props: ReviewCardProps) {
        super(props);
        this.state ={
            reviewid: 0,
            modal: false
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }


    render() {
        return (
            <div>
                { this.props.reviewRes.map((review: any) => {
                    console.log('review card', review)

                    return (
                        <div onMouseEnter={()=> {
                            this.setState({
                                reviewid: review.id}); }}key={review.id} className="reviewcard">
                            <h5>Title:</h5>
                            <h6>{review.title}</h6>
                            <h5>Review:</h5>
                            <p>{review.entry}</p>
                            <br></br>
                            <div className="reviewButton">
                                {/* <CreateReview token={this.props.token} businessid={review.id}/> */}
                                <br></br>
                                <br></br>
                                <br></br>
                                <EditReview token={this.props.token} reviewid={this.state.reviewid} />
                                <DeleteReview token={this.props.token} reviewid={this.state.reviewid} 
                                     />
                                     



                            </div>
                        </div>



                    )
                })

                }
            </div>



        )

    }
}

export default ReviewCard