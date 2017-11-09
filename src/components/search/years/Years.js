import React, { Component } from 'react';
import './Years.css';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllYears } from './../../../redux/reducer';
import Header from './header/Header';

class Years extends Component {

    componentDidMount() {
        this.props.getAllYears();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedModels !== nextProps.selectedModels) {
            this.props.getAllYears()
        }
    }

    render() {
        let yearsByModel = uniq(pluck(this.props.allYears, 'model')).map(model => {
            return (
                <Header key={model} model={model} />
            )
        })

        return (
            <div className="years_wrapper">
                <div className="year">Year</div>
                <div>{yearsByModel}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allYears: state.allYears,
        selectedModels: state.selectedModels
    }
}

export default connect(mapStateToProps, { getAllYears })(Years);