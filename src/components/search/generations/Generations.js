import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllGenerations } from './../../../redux/reducer';
import OneGeneration from './oneGeneration/OneGeneration';

class Generations extends Component {

    componentDidMount() {
        this.props.getAllGenerations();
    }

    render() {
        console.log(this.props.selectedGenerations) // delete later
        let generationsList = this.props.allGenerations.map(obj => {
            return (
                <OneGeneration key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                This is the Generations Component
                {generationsList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allGenerations: state.allGenerations,
        selectedGenerations: state.selectedGenerations // delete later
    }
}

export default connect(mapStateToProps, { getAllGenerations })(Generations);