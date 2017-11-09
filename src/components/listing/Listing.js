import React, { Component } from 'react';
import './Listing.css';
import { connect } from 'react-redux';
import { getActiveListing } from './../../redux/reducer';

class Listing extends Component {

    componentDidMount() {
        this.props.getActiveListing(this.props.match.params.listingId);
    }

    render() {
        console.log(this.props.activeListing)
        const listing = this.props.activeListing.length === 0 ?
            <div>Loading...</div> :
            <div className="listing_wrapper">
                <img className="photo" src={this.props.activeListing[0].photo1} alt='cover' />
                <div>{`Year: ${this.props.activeListing[0].year}`}</div>
                <div>{`Make: ${this.props.activeListing[0].make}`}</div>
                <div>{`Line: ${this.props.activeListing[0].line}`}</div>
                <div>{`Generation: ${this.props.activeListing[0].generation}`}</div>
                <div>{`Model: ${this.props.activeListing[0].model}`}</div>
            </div>

        return (
            <div>
                <div>{listing}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeListing: state.activeListing
    }
}

export default connect(mapStateToProps, { getActiveListing })(Listing)
