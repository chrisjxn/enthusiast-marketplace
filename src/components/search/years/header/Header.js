import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Year from './../year/Year';

class Header extends Component {

    render() {
        console.log(this.props.selectedYears) // delete later
        let filteredYears = this.props.allYears.filter(obj => {
            return obj.model_id === this.props.obj.model_id
        })

        let yearsList = filteredYears.map(obj => {
            return (
                <Year key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                <div className="years_header">
                    {`${this.props.obj.model} (${this.props.obj.generation})`}
                </div>
                {yearsList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allYears: state.allYears,
        selectedYears: state.selectedYears // delete later
    }
}

export default connect(mapStateToProps)(Header);
