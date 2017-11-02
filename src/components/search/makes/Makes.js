import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMakes } from './../../../redux/reducer';
import CheckboxBuilder from './../checkboxBuilder/CheckboxBuilder';

class Makes extends Component {

    componentDidMount() {
        this.props.getAllMakes();
    }

    render() {
        let makesList = this.props.allMakes.map(obj => {
            return (
                <CheckboxBuilder key={obj.id} obj={obj} />
            )
        })

        return (
            <div>
                This is the Makes Component
                {makesList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allMakes: state.allMakes
    }
}

export default connect(mapStateToProps, { getAllMakes })(Makes);
