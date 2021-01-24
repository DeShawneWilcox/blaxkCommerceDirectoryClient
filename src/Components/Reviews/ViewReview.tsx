import React from 'react';
import { render } from '@testing-library/react';
import ReviewCard from './ReviewCard';
type ViewProps = {
    review: any,
    reviewRes: any,
    title: string,
    entry: string,
    token: string,
    sessionToken: string,
    reviewid: any

}
type ViewReviewState = {
    reviewRes: any
}

class ViewReview extends React.Component<ViewProps, ViewReviewState> {
    constructor(props: ViewProps) {
        super(props);
        this.state = {
            reviewRes: []
        }

    }


    viewReviews() {
        fetch('http://localhost:1906/review/',
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





    render() {
        return (
            <div>
                <h3 className="current-module"></h3>
                <ReviewCard reviewRes={this.state.reviewRes} token={this.props.token}  sessionToken={this.props.sessionToken} title={this.props.title} entry={this.props.entry} reviewid={this.props.reviewid} review={this.props.review} />
            </div>


        )

    }
}

export default ViewReview