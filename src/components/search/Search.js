import React, { Component } from 'react';
import './Search.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Makes from './makes/Makes';
import Lines from './lines/Lines';
import Generations from './generations/Generations';
import Models from './models/Models';
import Years from './years/Years';

class Search extends Component {
    render() {
        return (
            <div className="search_background">
                <div className="search_wrapper">
                    <Makes />
                    <Lines />
                    <Generations />
                    <Models />
                    <Years />
                </div>
                <div className="results_button_wrapper">
                    <Paper className="results_button" zDepth={3}>
                        <Link to='/results' className="results_link_text">See Results Now</Link>
                    </Paper>
                    <Paper className="results_button" zDepth={3}>
                        <Link to={`/configurator/${this.props.selectedYears[0]}`} className="results_link_text">Refine Search</Link>
                    </Paper>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedYears: state.selectedYears,
    }
}

export default connect(mapStateToProps)(Search);
