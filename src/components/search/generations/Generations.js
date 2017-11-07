import React, { Component } from 'react';
import './Generations.css';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllGenerations } from './../../../redux/reducer';
import Header from './header/Header';

class Generations extends Component {

    componentDidMount() {
        this.props.getAllGenerations();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedLines !== nextProps.selectedLines) {
            this.props.getAllGenerations()
        }
    }

    render() {
        let generationsByLine = uniq(pluck(this.props.allGenerations, 'line')).map(line => {
            return (
                <Header key={line} line={line} />
            )
        })

        return (
            <div className="generations_wrapper">
                <div className="generation">Generation</div>
                <div>{generationsByLine}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allGenerations: state.allGenerations,
        selectedLines: state.selectedLines
    }
}

export default connect(mapStateToProps, { getAllGenerations })(Generations);