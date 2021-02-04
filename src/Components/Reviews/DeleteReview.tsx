import React from 'react';
import { render } from '@testing-library/react';
import {Button} from 'reactstrap';
import APIURL from '../../helpers/environment'

type DeleteProps = {
    reviewid: number,
    token: string,
    
}


class DeleteReview extends React.Component<DeleteProps, {}> {
    constructor(props: DeleteProps){
    super(props)
    console.log('delete review token', this.props.token)
    this.submitDeleteReview = this.submitDeleteReview.bind(this)
        
    
    }

    submitDeleteReview (event: any) {
        event.preventDefault();
        console.log(this.props);
        console.log('delete review ran', this.props.reviewid)
        fetch(`${APIURL}/review/delete/${this.props.reviewid}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(response => {
            response.json()
            window.location.reload(false)
        })
    }

    render(): any {
        return (
            <div>
                <Button onClick={this.submitDeleteReview}>Delete Review</Button>
            </div>



        )

    }
}

export default DeleteReview;