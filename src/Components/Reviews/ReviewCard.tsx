import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CardBody, Card} from 'reactstrap';
import CreateReview from './CreateReview';
import ViewReview from './ViewReview';
import EditReview from './EditReview';
import DeleteReview from './DeleteReview';

import { render } from '@testing-library/react';

type ReviewCardProps = {
  review: any,
  reviewid: any,
  reviewRes: any,
  title: string,
  entry: string,
  token: string,
  sessionToken: string
}





class ReviewCard extends React.Component<ReviewCardProps> {


    render() {
        return (
            <div>
                { this.props.reviewRes.map((review: any) => {
                    console.log('review card', review)

                    return (
                        <div key={review.id} className="reviewcard">
                            <h5>Title:</h5>
                            <h6>{review.title}</h6>
                            <h5>Please leave a review. Please describe your experience and any other notable things that come to mind.</h5>
                            <p>{review.entry}</p>
                            <br></br>
                            <div className="reviewButton">
                                <CreateReview token={this.props.token} reviewid={review.id}sessionToken={this.props.sessionToken}  review={this.props.review} 
                                reviewRes={this.props.reviewRes} title={this.props.title} entry={this.props.entry}/>
                                <br></br>
                                <ViewReview reviewid={review.id} token={this.props.token} sessionToken={this.props.sessionToken}  review={this.props.review} 
                                reviewRes={this.props.reviewRes} title={this.props.title} entry={this.props.entry}/>
                                <br></br>
                                <br></br>
                                {/* <EditReview token={this.props.token} reviewid={review.id}/>
                                <DeleteReview token={this.props.token} reviewid={review.id}/> */}


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