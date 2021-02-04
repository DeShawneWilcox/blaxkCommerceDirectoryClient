import APIURL from '../../helpers/environment';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal } from 'reactstrap';




type CreateBusinessProps = {
    sessionToken: string,
    token: string,
    businessToken: string,
    business: any,
    businessid: any,
    businessRes: any,
    businessOwner: string,
    businessName: string,
    address: string,
    zipcode: string,
    businessFunction: string
}

type CreateBusinessState = {
    businessid: any,
    businessOwner: string,
    businessName: string,
    address: string,
    zipcode: string,
    businessFunction: string,
    submittedBusiness: boolean,
    modal: boolean
}

class CreateBusiness extends React.Component<CreateBusinessProps, CreateBusinessState> {
    constructor(props: CreateBusinessProps) {
        super(props);
        this.state = {
        
            businessid: '',
            businessOwner: '',
            businessName: '',
            address: '',
            zipcode: '',
            businessFunction: '',
            submittedBusiness: false,
            modal: false
        }
        console.log('business token ---->', this.props.businessToken)
        this.createBusiness = this.createBusiness.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    createBusiness(event: any) { 
        event.preventDefault();
        fetch(`${APIURL}/business/`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token,
            }),
            body: JSON.stringify({
                business: {
                    businessOwner: this.state.businessOwner,
                    businessName: this.state.businessName,
                    address: this.state.address,
                    zipcode: this.state.zipcode,
                    businessFunction: this.state.businessFunction
                }
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.setState({
            businessid: '',
            businessOwner: '',
            businessName: '',
            address: '',
            zipcode: '',
            businessFunction: ''
        })
    }

    businessAdded = () => {
        this.setState({
            submittedBusiness: true
        })
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }



    render (): any {
        return (
            <div>
                

                {this.state.submittedBusiness === true ?
                null
            :
            <div>
                <h3>Create Business</h3>
                <Form onSubmit={this.createBusiness}>
                <FormGroup>
                                <Label for="businessOwner"></Label>
                                <Input type="text" name="businessOwner" value={this.state.businessOwner} id="business-owner-entry" required placeholder="Business Owner" onChange={(e) => this.setState({ businessOwner: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="businessName"></Label>
                                <Input type="text" name="businessName" value={this.state.businessName} id="businessName-entry" required placeholder="Business Name" onChange={(e) => this.setState({ businessName: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="address"></Label>
                                <Input type="text" name="address" value={this.state.address} id="address-entry" required placeholder="Address" onChange={(e) => this.setState({ address: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="zipcode"></Label>
                                <Input type="text" name="zipcode" value={this.state.zipcode} id="zipcode-entry" required placeholder="Zipcode" onChange={(e) => this.setState({ zipcode: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="businessFunction"></Label>
                                <Input type="text" name="businessFunction" value={this.state.businessFunction} id="business-function-entry" required placeholder="Business Function" onChange={(e) => this.setState({ businessFunction: e.target.value })} />
                            </FormGroup>
                            <Button onClick={this.toggle}>Submit</Button>
                            <Button onClick={this.toggle}>Cancel</Button>
                </Form>
                </div>}
            </div>
        )
    }


}

export default CreateBusiness;
