import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllModels } from './../../../redux/reducer';
import OneModel from './oneModel/OneModel';

class Models extends Component {

    componentDidMount() {
        this.props.getAllModels();
    }

    render() {
        console.log(this.props.selectedModels) // delete later
        let modelsList = this.props.allModels.map(obj => {
            return (
                <OneModel key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                This is the Models Component
                {modelsList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allModels: state.allModels,
        selectedModels: state.selectedModels // delete later
    }
}

export default connect(mapStateToProps, { getAllModels })(Models);