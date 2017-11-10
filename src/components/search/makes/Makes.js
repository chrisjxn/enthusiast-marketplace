import React, { Component } from 'react';
import './Makes.css';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllMakes } from './../../../redux/reducer';
import Paper from 'material-ui/Paper';
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
                <Paper className="makes_wrapper" zDepth={3}>
                    <div className="make">Make</div>
                    <div>{makesByRegion}</div>
                </Paper>
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