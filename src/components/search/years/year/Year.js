import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { selectYears } from './../../../../redux/reducer';

function Year(props) {

    const handleCheckboxToggle = () => {
        props.selectYears(props.obj.id)
    }

    const checkedStatus = () => {
        return props.selectedYears.includes(props.obj.id)
        // checks to see whether the selectedYears array includes the year and returns true or false, which sets the checked value for the checkbox
    }

    return (
        <Checkbox
            label={props.obj.year}
            checked={checkedStatus()}
            onCheck={handleCheckboxToggle} />
    )
}

function mapStateToProps(state) {
    return {
        selectedYears: state.selectedYears
    }
}

export default connect(mapStateToProps, { selectYears })(Year);