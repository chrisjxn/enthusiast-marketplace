import React, { Component } from 'react';
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
            <div>
                <div>This is a single listing</div>
                <div>{this.props.activeListing[0].year}</div>
                <div>{this.props.activeListing[0].make}</div>
                <div>{this.props.activeListing[0].line}</div>
                <div>{this.props.activeListing[0].generation}</div>
                <div>{this.props.activeListing[0].model}</div>
                <div>{this.props.activeListing[0].id}</div>
            </div>

        return (
            <div>
                <div>This is the Listing Component</div>
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
