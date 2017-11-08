import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
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
            <div>
                <Carousel className="photo">
                    <img src={this.props.activeListing[0].photo1} alt='cover' />
                    <img src={this.props.activeListing[0].photo2} alt='cover' />
                    <img src={this.props.activeListing[0].photo3} alt='cover' />
                    <img src={this.props.activeListing[0].photo4} alt='cover' />
                    <img src={this.props.activeListing[0].photo5} alt='cover' />
                    <img src={this.props.activeListing[0].photo6} alt='cover' />
                    <img src={this.props.activeListing[0].photo7} alt='cover' />
                    <img src={this.props.activeListing[0].photo8} alt='cover' />
                    <img src={this.props.activeListing[0].photo9} alt='cover' />
                    <img src={this.props.activeListing[0].photo10} alt='cover' />
                    <img src={this.props.activeListing[0].photo11} alt='cover' />
                    <img src={this.props.activeListing[0].photo12} alt='cover' />
                    <img src={this.props.activeListing[0].photo13} alt='cover' />
                    <img src={this.props.activeListing[0].photo14} alt='cover' />
                    <img src={this.props.activeListing[0].photo15} alt='cover' />
                    <img src={this.props.activeListing[0].photo16} alt='cover' />
                    <img src={this.props.activeListing[0].photo17} alt='cover' />
                    <img src={this.props.activeListing[0].photo18} alt='cover' />
                    <img src={this.props.activeListing[0].photo19} alt='cover' />
                    <img src={this.props.activeListing[0].photo20} alt='cover' />
                    <img src={this.props.activeListing[0].photo21} alt='cover' />
                    <img src={this.props.activeListing[0].photo22} alt='cover' />
                    <img src={this.props.activeListing[0].photo23} alt='cover' />
                    <img src={this.props.activeListing[0].photo24} alt='cover' />
                    <img src={this.props.activeListing[0].photo25} alt='cover' />
                    <img src={this.props.activeListing[0].photo26} alt='cover' />
                    <img src={this.props.activeListing[0].photo27} alt='cover' />
                    <img src={this.props.activeListing[0].photo28} alt='cover' />
                    <img src={this.props.activeListing[0].photo29} alt='cover' />
                    <img src={this.props.activeListing[0].photo30} alt='cover' />
                    <img src={this.props.activeListing[0].photo31} alt='cover' />
                </Carousel>
                <div className="listing_wrapper">
                    <div>{`Year: ${this.props.activeListing[0].year}`}</div>
                    <div>{`Make: ${this.props.activeListing[0].make}`}</div>
                    <div>{`Line: ${this.props.activeListing[0].line}`}</div>
                    <div>{`Generation: ${this.props.activeListing[0].generation}`}</div>
                    <div>{`Model: ${this.props.activeListing[0].model}`}</div>
                </div>
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
