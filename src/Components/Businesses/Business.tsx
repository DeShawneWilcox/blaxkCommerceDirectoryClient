import React from 'react';
import ViewBusiness from './ViewBusiness';
import CreateBusiness from './CreateBusiness';
import { Button } from 'reactstrap';

type BusinessProps = {
    sessionToken: string,
    token: string,
    businessToken: string,
    businessid: string
}

type BusinessState = {
    addBusiness: boolean,
    business: any,
    businessid: any,
    businessRes: any,
    businessOwner: string,
    businessName: string,
    address: string,
    zipcode: string,
    businessFunction: string


}

class Business extends React.Component<BusinessProps, BusinessState>{
    constructor(props: BusinessProps) {
        super(props);
        this.state = {
            addBusiness: false,
            business: '',
            businessid: null,
            businessRes: [],
            businessOwner: '',
            businessName: '',
            address: '',
            zipcode: '',
            businessFunction: ''


        }
    }

    clickAddBusiness = () => {
        this.setState({
            addBusiness: true
        })
    }

    clickViewBusinesses = () => {
        this.setState({
            addBusiness: false
        })
    }


    render(): any {
        return (
            <div className="jumpotron">
                {this.state.addBusiness === false ?
                    <div>
                        <Button className="createbusinessbutton" onClick={this.clickAddBusiness}>Would you like to create a business?</Button>
                        <ViewBusiness token={this.props.token} sessionToken={this.props.sessionToken}
                            business={this.state.business} businessid={this.state.businessid} businessRes={this.state.businessRes} businessOwner={this.state.businessOwner} businessName={this.state.businessName} address={this.state.address} zipcode={this.state.zipcode} businessFunction={this.state.businessFunction} businessToken={this.props.businessToken} />
                    </div>

                    :
                    <div>
                        <Button onClick={this.clickViewBusinesses}>View all Businesses</Button>
                        <CreateBusiness token={this.props.token} sessionToken={this.props.sessionToken}
                            business={this.state.business} businessid={this.state.businessid} businessRes={this.state.businessRes} businessOwner={this.state.businessOwner} businessName={this.state.businessName} address={this.state.address} zipcode={this.state.zipcode} businessFunction={this.state.businessFunction} businessToken={this.props.businessToken} />

                    </div>
                }
            </div>
        )

    }
}

export default Business;