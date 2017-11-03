import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLines } from './../../../redux/reducer';
import OneLine from './oneLine/OneLine';

class Lines extends Component {

    componentDidMount() {
        this.props.getAllLines();
    }

    render() {
        console.log(this.props.selectedLines) // delete later
        let linesList = this.props.allLines.map(obj => {
            return (
                <OneLine key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                This is the Lines Component
                {linesList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allLines: state.allLines,
        selectedLines: state.selectedLines // delete later
    }
}

export default connect(mapStateToProps, { getAllLines })(Lines);