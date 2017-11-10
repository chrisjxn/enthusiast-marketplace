import React, { Component } from 'react';
import './Lines.css';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllLines } from './../../../redux/reducer';
import Paper from 'material-ui/Paper';
import Header from './header/Header';

class Lines extends Component {

    componentDidMount() {
        this.props.getAllLines();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedMakes !== nextProps.selectedMakes) {
            this.props.getAllLines()
        }
    }

    render() {
        let linesByMake = uniq(pluck(this.props.allLines, 'make')).map(make => {
            return (
                <Header key={make} make={make} />
            )
        })

        return (
            <div>
                <Paper className="lines_wrapper" zDepth={3}>
                    <div className="line">Line</div>
                    <div>{linesByMake}</div>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allLines: state.allLines,
        selectedMakes: state.selectedMakes
    }
}

export default connect(mapStateToProps, { getAllLines })(Lines);