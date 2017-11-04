import React, { Component } from 'react';
import { connect } from 'react-redux';
import Make from './../make/Make';

class Header extends Component {

    render() {
        console.log(this.props.selectedMakes) // delete later
        let filteredMakes = this.props.allMakes.filter(obj => {
            return obj.region === this.props.region
        })

        let makesList = filteredMakes.map(obj => {
            return (
                <Make key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                {this.props.region}
                {makesList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allMakes: state.allMakes,
        selectedMakes: state.selectedMakes // delete later
    }
}

export default connect(mapStateToProps)(Header);
