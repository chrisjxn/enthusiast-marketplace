import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Model from './../model/Model';

class Header extends Component {

    render() {
        console.log(this.props.selectedModels) // delete later
        let filteredModels = this.props.allModels.filter(obj => {
            return obj.generation === this.props.generation
        })

        let modelsList = filteredModels.map(obj => {
            return (
                <Model key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                <div className="header">
                    {this.props.generation}
                </div>
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

export default connect(mapStateToProps)(Header);
