import React from 'react';
import { connect } from 'react-redux';
import { getAllLinesFromSelectedMakes } from './../../../redux/reducer';
import OneLine from './oneLine/OneLine';

class Lines extends Component {

    componentDidMount() {
        this.props.getAllLinesFromSelectedMakes();
    }

    render() {
        console.log(this.props.selectedLines) // delete later
        let linesList = this.props.allLinesFromSelectedMakes.map(obj => {
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
        allLinesFromSelectedMakes: state.allLinesFromSelectedMakes,
        selectedLines: state.selectedLines // delete later
    }
}

export default connect(mapStateToProps, { getAllLinesFromSelectedMakes })(Lines);