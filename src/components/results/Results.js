import React, { Component } from 'react';
import './Results.css';
import { connect } from 'react-redux';
import { getAllListings } from './../../redux/reducer';
import Result from './result/Result';

class Results extends Component {

    componentDidMount() {
        this.props.getAllListings();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedModels !== nextProps.selectedModels) {
            this.props.getAllListings()
        }
    }

    render() {
        let resultsList = this.props.allListings.map(obj => {
            return (
                <Result key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                <div className="results_grid">
                    {resultsList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allListings: state.allListings,
        selectedModels: state.selectedModels
    }
}

export default connect(mapStateToProps, { getAllListings })(Results);
