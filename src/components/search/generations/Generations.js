import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllGenerations } from './../../../redux/reducer';
import Header from './header/Header';

class Generations extends Component {

    componentDidMount() {
        this.props.getAllGenerations();
    }

    render() {
        let generationsByLine = uniq(pluck(this.props.allGenerations, 'line')).map(line => {
            return (
                <Header key={line} line={line} />
            )
        })

        return (
            <div>
                <div>Generations</div>
                <div>{generationsByLine}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allGenerations: state.allGenerations,
    }
}

export default connect(mapStateToProps, { getAllGenerations })(Generations);