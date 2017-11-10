import React, { Component } from 'react';
import './Years.css';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllYears } from './../../../redux/reducer';
import Paper from 'material-ui/Paper';
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
        let uniqueModelIds = uniq(pluck(this.props.allYears, 'model_id'));
        let uniqueModelData = uniqueModelIds.map(modelId => {
            return this.props.allYears.filter(obj => obj.model_id === modelId)[0];
        });
        let yearsByModel = uniqueModelData.map(obj => {
            return (
                <Header key={obj.model_id} obj={obj} />
            )
        })

        return (
            <div>
                <Paper className="years_wrapper" zDepth={3}>
                    <div className="year">Year</div>
                    <div>{yearsByModel}</div>
                </Paper>
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