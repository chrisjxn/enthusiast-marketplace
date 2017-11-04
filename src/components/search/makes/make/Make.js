import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { selectMakes } from './../../../../redux/reducer';

function Make(props) {

    const handleCheckboxToggle = () => {
        props.selectMakes(props.obj.make)
    }

    const checkedStatus = () => {
        return props.selectedMakes.includes(props.obj.make)
        // checks to see whether the selectedMakes array includes the make and returns true or false, which sets the checked value for the checkbox
    }

    return (
        <Checkbox
            label={props.obj.make}
            checked={checkedStatus()}
            onCheck={handleCheckboxToggle} />
    )
}

function mapStateToProps(state) {
    return {
        selectedMakes: state.selectedMakes
    }
}

export default connect(mapStateToProps, { selectMakes })(Make);