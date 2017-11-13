import React, { Component } from 'react';
import './ConfigResults.css';
import { connect } from 'react-redux';
import { getConfigListings } from './../../redux/reducer';
import ConfigResult from './configResult/ConfigResult';

class ConfigResults extends Component {

    componentDidMount() {
        this.props.getConfigListings(this.props.match.params.colorId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedYears !== nextProps.selectedYears) {
            this.props.getConfigListings()
        }
    }

    render() {
        let configResultsList = this.props.configListings.map(obj => {
            return (
                <ConfigResult key={obj.id} obj={obj} />
            )
        })

        return (
            <div className="configResults_background">
                <div className="configResults_grid">
                    {configResultsList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        configListings: state.configListings,
        selectedYears: state.selectedYears
    }
}

export default connect(mapStateToProps, { getConfigListings })(ConfigResults);
