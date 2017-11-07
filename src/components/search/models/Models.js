import React, { Component } from 'react';
import './Models.css';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllModels } from './../../../redux/reducer';
import Header from './header/Header';

class Models extends Component {

    componentDidMount() {
        this.props.getAllModels();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedGenerations !== nextProps.selectedGenerations) {
            this.props.getAllModels()
        }
    }

    render() {
        let modelsByGeneration = uniq(pluck(this.props.allModels, 'generation')).map(generation => {
            return (
                <Header key={generation} generation={generation} />
            )
        })

        return (
            <div className="models_wrapper">
                <div className="model">Model</div>
                <div>{modelsByGeneration}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allModels: state.allModels,
        selectedGenerations: state.selectedGenerations
    }
}

export default connect(mapStateToProps, { getAllModels })(Models);