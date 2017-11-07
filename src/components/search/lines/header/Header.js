import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Line from './../line/Line';

class Header extends Component {

    render() {
        console.log(this.props.selectedLines) // delete later
        let filteredLines = this.props.allLines.filter(obj => {
            return obj.make === this.props.make
        })

        let linesList = filteredLines.map(obj => {
            return (
                <Line key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                <div className="header">
                    {this.props.make}
                </div>
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

export default connect(mapStateToProps)(Header);
