import React from 'react';
import { Button, Modal, } from 'reactstrap'



import Review from '../Reviews/Review';
import { stringify } from 'querystring';

type BusinessCardProps = {
    
    token: string,
    businessToken: string,
    business: any,
    businessid: number,
    businessRes: any,
    businessOwner: string,
    businessName: string,
    address: string,
    zipcode: string,
    businessFunction: string,
    
    

}

type BusinessCardState = {
    businessid: number
}

class BusinessCard extends React.Component<BusinessCardProps, BusinessCardState> {
constructor(props: BusinessCardProps) {
    super(props);
    this.state={
        businessid: 0
    }
}





    render() {
        return (
            <div>
                {this.props.businessRes.map((business: any) => {
                    console.log('business card', business)

                    return (
                        <div onMouseEnter={() => {
                            this.setState({
                                businessid: business.id
                            }); console.log(typeof(business.id))
                        }}key={business.id}
                            className="businesscard">
                            <h5>Business Name:</h5>
                            <h6>{business.businessName}</h6>
                            <h5>Business Owner:</h5>
                            <h6>{business.businessOwner}</h6>
                            <h5>Address:</h5>
                            <h6>{business.address}</h6>
                            <h5>Zipcode:</h5>
                            <h6>{business.zipcode}</h6>
                            <h5>Business Function</h5>
                            <h6>{business.businessFunction}</h6>
                            <br></br>

                            <div>
                                <Review businessid= {this.state.businessid} token={this.props.token}/>

                            </div>
                        </div>

                    )
                })

                }

            </div>
        )
    }





}
export default BusinessCard