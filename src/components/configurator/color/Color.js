import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { selectColors } from './../../../redux/reducer';

function Color(props) {

    console.log(props.selectedColors);

    const handleCheckboxToggle = () => {
        props.selectColors(props.obj.id)
    }

    const checkedStatus = () => {
        return props.selectedColors.includes(props.obj.id)
        // checks to see whether the selectedColors array includes the color and returns true or false, which sets the checked value for the checkbox
    }

    return (
        <Checkbox
            label={props.obj.color}
            checked={checkedStatus()}
            onCheck={handleCheckboxToggle} />
    )
}

function mapStateToProps(state) {
    return {
        selectedColors: state.selectedColors
    }
}

export default connect(mapStateToProps, { selectColors })(Color);