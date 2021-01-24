import React from 'react';
import { render } from '@testing-library/react';
import { tokenToString } from 'typescript';
import ViewReview from './ViewReview';
import CreateReview from './CreateReview';
import { Button } from 'reactstrap';
import { stringify } from 'querystring';


type ReviewProps = {

    sessionToken: string,
    token: string,
}

type ReviewState = {
    addReview: boolean,
    review: any,
    reviewid: any,
    reviewRes: any,
    title: string,
    entry: string,
}



class Review extends React.Component<ReviewProps, ReviewState> {
    constructor(props: ReviewProps) {
        super(props);
        this.state = {
            addReview: false,
            review: '',
            reviewid: null,
            reviewRes: [],
            title: '',
            entry: ''
        
        }// this.reviewRes =this.reviewRes.bind(this)
    }

    clickAddReview() {
        this.componentDidCatch = () => {
            this.setState({
                addReview: true
            })

        }

    }

    clickViewReview() {
        this.componentDidCatch = () => {
            this.setState({
                addReview: false
            })

        }

    }



    render(): any {
        return (
            <div className="jumbotron">

                {this.state.addReview === false ?
                    <div>
                        <Button onClick={this.clickAddReview}>Please leave a review.</Button>
                        <ViewReview token={this.props.token} sessionToken={this.props.sessionToken} review={this.state.review} reviewid={this.state.reviewid} reviewRes={this.state.reviewRes} title={this.state.title} entry={this.state.entry} />
                    </div>

                    :

                    <div>
                        <Button onClick={this.clickViewReview}>View all Reviews.</Button>
                        <CreateReview token={this.props.token} sessionToken={this.props.sessionToken} review={this.state.review} reviewid={this.state.reviewid} reviewRes={this.state.reviewRes} title={this.state.title} entry={this.state.entry} />
                    </div>

                }

            </div>




        )





    }
}



export default Review;