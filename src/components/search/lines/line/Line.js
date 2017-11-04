import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { selectLines } from './../../../../redux/reducer';

function Line(props) {

    const handleCheckboxToggle = () => {
        props.selectLines(props.obj.line)
    }

    const checkedStatus = () => {
        return props.selectedLines.includes(props.obj.line)
        // checks to see whether the selectedLines array includes the line and returns true or false, which sets the checked value for the checkbox
    }

    return (
        <Checkbox
            label={props.obj.line}
            checked={checkedStatus()}
            onCheck={handleCheckboxToggle} />
    )
}

function mapStateToProps(state) {
    return {
        selectedLines: state.selectedLines
    }
}

export default connect(mapStateToProps, { selectLines })(Line);