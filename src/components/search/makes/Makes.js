import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllMakes } from './../../../redux/reducer';
import Header from './header/Header';

class Makes extends Component {

    componentDidMount() {
        this.props.getAllMakes();
    }

    render() {
        let makesByRegion = uniq(pluck(this.props.allMakes, 'region')).map(region => {
            return (
                <Header key={region} region={region} />
            )
        })

        return (
            <div>
                <div>Makes</div>
                <div>{makesByRegion}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allMakes: state.allMakes,
    }
}

export default connect(mapStateToProps, { getAllMakes })(Makes);