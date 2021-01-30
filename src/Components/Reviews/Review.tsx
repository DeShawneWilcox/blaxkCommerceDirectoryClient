import React from 'react';
import { render } from '@testing-library/react';
import { tokenToString } from 'typescript';
import ViewReview from './ViewReview';
import CreateReview from './CreateReview';
import { Button } from 'reactstrap';
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
            entry: ''
        
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

                {this.state.addReview === false ?
                    <div>
                        <Button onClick={this.clickAddReview}>Please leave a review.</Button>
                        <h2>should see reviews</h2>
                        <ViewReview businessid= {this.props.businessid} token={this.props.token} />
                    </div>

                    :

                    <div>
                        <Button onClick={this.clickViewReview}>View all Reviews.</Button>
                        <CreateReview businessid={this.props.businessid} token={this.props.token} />
                    </div>

                }

            </div>




        )





    }
}



export default Review;