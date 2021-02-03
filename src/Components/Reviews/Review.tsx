import React from 'react';
import { render } from '@testing-library/react';
import { tokenToString } from 'typescript';
import ViewReview from './ViewReview';
import CreateReview from './CreateReview';
import { Button, Modal, Row, Col, Container } from 'reactstrap';
import { stringify } from 'querystring';


type ReviewProps = {
    businessid: any,
    token: string,
    
}

type ReviewState = {
    addReview: boolean,
    review: any,
    reviewid: number,
    title: string,
    entry: string,
    
}



class Review extends React.Component<ReviewProps, ReviewState> {
    constructor(props: ReviewProps) {
        super(props);
        this.state = {
            addReview: false,
            review: '',
            reviewid: 0,
            title: '',
            entry: '',
            
        
        }
        
         
    }

    clickAddReview = () => {
         
            this.setState({
                addReview: true
            })
        
    }

    clickViewReview = () => {
        
            this.setState({
                addReview: false
            })
            
    

    }

    



    render(): any {
        return (
            <div className="jumbotron">
                <Container>

                {this.state.addReview === false ?
                    <div>
                        
                        <Row>
                        <Button  color="primary" className="ReviewsButtons"onClick= {this.clickAddReview}> Reviews</Button>
                        <CreateReview businessid={this.props.businessid} token={this.props.token} />
                        </Row>
                        
                    </div>

                    :

                    <div>
                       
                        <Row>
                        <Button size="sm" color="primary" className="ExitButton" onClick={this.clickViewReview}>Exit</Button>
                        <ViewReview businessid= {this.props.businessid} token={this.props.token} />
                        </Row>
                    </div>

                }
</Container>
            </div>




        )





    }
}



export default Review;