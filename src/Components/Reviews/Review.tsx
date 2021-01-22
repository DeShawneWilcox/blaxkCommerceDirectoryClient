import React from 'react';
import { render } from '@testing-library/react';
import { tokenToString } from 'typescript';
import Viewreview from './ViewReview';
import Createreview from './CreateReview';
import { Button } from 'reactstrap';


type ReviewProps = {
sessionToken: string,
token: string,
}

type ReviewState = {
    addReview: boolean,



}


class Review extends React.Component<ReviewProps,ReviewState> {
    constructor(props: ReviewProps) {
        super(props);
        this.state = {
            addReview : false
        }
    }

    clickAddReview  ()  {
        this.componentDidCatch = () => {
         this.setState({
           addReview: true
         })
         
       }
      
       }

       clickViewReview  ()  {
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
                   <Viewreview token={this.props.token} sessionToken={this.props.sessionToken}/>
               </div>

               :

               <div>
                   <Button onClick={this.clickViewReview}>View all Reviews.</Button>
                   <Createreview token={this.props.token}/>
               </div>
            
            }
               
                   </div>
               

              
            
        )
        


    

    }
}



export default Review;