import React from 'react';
import BusinessCard from './BusinessCard'
import APIURL from '../../helpers/environment'

type ViewBusinessProps = {
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

type ViewBusinessState = {
    businessRes: any
}

class ViewBusiness extends React.Component<ViewBusinessProps, ViewBusinessState> {
    constructor(props:ViewBusinessProps) {
        super(props);
        this.state= {
            businessRes: []
        }
        this.viewBusinesses = this.viewBusinesses.bind(this)
    }

    viewBusinesses() {
        fetch(`${APIURL}/business/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(response => response.json())
        .then(result => {
            this.setState({
                businessRes: result
            })
            console.log('set business res', this.state.businessRes);
            console.log('view businesses', result)
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.viewBusinesses()
    }

    render() {
        return (
            <div>
                <h3 className="current-module"></h3>
                <BusinessCard  token={this.props.token} businessToken={this.props.businessToken} business={this.props.business} businessid={this.props.businessid} businessRes={this.state.businessRes} businessOwner={this.props.businessOwner} businessName={this.props.businessName} address={this.props.address} zipcode= {this.props.zipcode} businessFunction={this.props.businessFunction}  />
            </div>
        )
    }








}
export default ViewBusiness;

