import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllListings } from './../../redux/reducer';
import OneResult from './oneResult/OneResult';

class Results extends Component {

    componentDidMount() {
        this.props.getAllListings();
    }

    render() {
        let resultsList = this.props.allListings.map(obj => {
            return (
                <OneResult key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                This is the Results Component
                {resultsList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allListings: state.allListings,
    }
}

export default connect(mapStateToProps, { getAllListings })(Results);
