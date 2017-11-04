import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniq, pluck } from 'underscore';
import { getAllLines } from './../../../redux/reducer';
import Header from './header/Header';

class Lines extends Component {

    componentDidMount() {
        this.props.getAllLines();
    }

    render() {
        let linesByMake = uniq(pluck(this.props.allLines, 'make')).map(make => {
            return (
                <Header key={make} make={make} />
            )
        })

        return (
            <div>
                <div>Lines</div>
                <div>{linesByMake}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allLines: state.allLines,
    }
}

export default connect(mapStateToProps, { getAllLines })(Lines);