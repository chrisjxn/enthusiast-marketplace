import React, { Component } from 'react';
import './Listing.css';
// import './../../../node_modules/slick-carousel/slick/slick.css';
// import './../../../node_modules/slick-carousel/slick/slick-theme.css';
import { connect } from 'react-redux';
import { getActiveListing } from './../../redux/reducer';
import Slider from 'react-slick';
import Paper from 'material-ui/Paper';

class Listing extends Component {

    componentDidMount() {
        this.props.getActiveListing(this.props.match.params.listingId);
    }

    render() {

        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        console.log(this.props.activeListing)
        const listing = this.props.activeListing.length === 0 ?
            <div>Loading...</div> :
            <div>
                <div className="slider_container">
                    <Slider {...settings}>
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
                    </Slider>
                </div>
                <div className="listing_text">
                    <div>
                        <Paper className="title" zDepth={3}>
                            {`${this.props.activeListing[0].year} ${this.props.activeListing[0].make} ${this.props.activeListing[0].model} (${this.props.activeListing[0].generation})`}
                        </Paper>
                    </div>
                    <div className="columns">
                        <Paper className="left_column" zDepth={3}>
                            <div className="column_header">Pricing and Ownership History</div>
                            <div className="column_content">
                                <div className="category">Price:</div>
                                <div className="value">{`$ ${this.props.activeListing[0].price}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Miles:</div>
                                <div className="value">{`${this.props.activeListing[0].miles}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Location:</div>
                                <div className="value">{`${this.props.activeListing[0].location}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Owners:</div>
                                <div className="value">{`${this.props.activeListing[0].owners}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Modifications:</div>
                                <div className="value">{`${this.props.activeListing[0].modifications}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Track / Autocross:</div>
                                <div className="value">{`${this.props.activeListing[0].track_autox_use}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Maintenance:</div>
                                <div className="value">{`${this.props.activeListing[0].maintenance_and_records}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Contact:</div>
                                <div className="value">{`${this.props.activeListing[0].first_name} ${this.props.activeListing[0].last_name}\n${this.props.activeListing[0].email}\n${this.props.activeListing[0].phone}`}</div>
                            </div>
                        </Paper>
                        <Paper className="right_column" zDepth={3}>
                            <div className="column_header">Vehicle Configuration</div>
                            <div className="column_content">
                                <div className="category">Trim:</div>
                                <div className="value">{`$ ${this.props.activeListing[0].trim}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Engine:</div>
                                <div className="value">{`${this.props.activeListing[0].engine}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Transmission:</div>
                                <div className="value">{`${this.props.activeListing[0].transmission}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Color:</div>
                                <div className="value">{`${this.props.activeListing[0].color}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Interior:</div>
                                <div className="value">{`${this.props.activeListing[0].interior}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Packages:</div>
                                <div className="value">{`${this.props.activeListing[0].package}`}</div>
                            </div>
                            <div className="column_content">
                                <div className="category">Options:</div>
                                <div className="value">{`${this.props.activeListing[0].option}`}</div>
                            </div>
                        </Paper>
                    </div>
                    <Paper className="description" zDepth={3}>
                        {`${this.props.activeListing[0].description}`}
                    </Paper>
                </div >
            </div >

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
