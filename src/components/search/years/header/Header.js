import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Year from './../year/Year';

class Header extends Component {

    render() {
        console.log(this.props.selectedYears) // delete later
        let filteredYears = this.props.allYears.filter(obj => {
            return obj.model === this.props.model
        })

        let yearsList = filteredYears.map(obj => {
            return (
                <Year key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                <div className="years_header">
                    {this.props.model}
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
