import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Generation from './../generation/Generation';

class Header extends Component {

    render() {
        console.log(this.props.selectedGenerations) // delete later
        let filteredGenerations = this.props.allGenerations.filter(obj => {
            return obj.line === this.props.line
        })

        let generationsList = filteredGenerations.map(obj => {
            return (
                <Generation key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                <div className="generations_header">
                    {this.props.line}
                </div>
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

export default connect(mapStateToProps)(Header);
