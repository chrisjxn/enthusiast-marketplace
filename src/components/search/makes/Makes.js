import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMakes } from './../../../redux/reducer';
import OneMake from './oneMake/OneMake';

class Makes extends Component {

    componentDidMount() {
        this.props.getAllMakes();
    }

    render() {
        console.log(this.props.selectedMakes) // delete later
        let makesList = this.props.allMakes.map(obj => {
            return (
                <OneMake key={obj.id} obj={obj} />
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
        allMakes: state.allMakes,
        selectedMakes: state.selectedMakes // delete later
    }
}

export default connect(mapStateToProps, { getAllMakes })(Makes);
