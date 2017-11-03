import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { selectGenerations } from './../../../../redux/reducer';

function OneGeneration(props) {

    const handleCheck = () => {
        props.selectGenerations(props.obj.generation)
    }

    const checkedStatus = () => {
        return props.selectedGenerations.includes(props.obj.generation)
        // checks to see whether the selectedGenerations array includes the generation and returns true or false, which sets the checked value for the checkbox
    }

    return (
        <Checkbox
            label={props.obj.generation}
            checked={checkedStatus()}
            onCheck={handleCheck} />
    )
}

function mapStateToProps(state) {
    return {
        selectedGenerations: state.selectedGenerations
    }
}

export default connect(mapStateToProps, { selectGenerations })(OneGeneration);