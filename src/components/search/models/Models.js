import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllModels } from './../../../redux/reducer';
import Header from './header/Header';

class Models extends Component {

    componentDidMount() {
        this.props.getAllModels();
    }

    render() {
        let modelsByGeneration = uniq(pluck(this.props.allModels, 'generation')).map(generation => {
            return (
                <Header key={generation} generation={generation} />
            )
        })

        return (
            <div>
                <div>Models</div>
                <div>{modelsByGeneration}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allModels: state.allModels,
    }
}

export default connect(mapStateToProps, { getAllModels })(Models);