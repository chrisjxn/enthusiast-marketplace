import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { selectLines } from './../../../../redux/reducer';

function OneLine(props) {

    const handleCheck = () => {
        props.selectLines(props.obj.product_line)
    }

    const checkedStatus = () => {
        return props.selectedLines.includes(props.obj.product_line)
        // checks to see whether the selectedLines array includes the line and returns true or false, which sets the checked value for the checkbox
    }

    return (
        <Checkbox
            label={props.obj.product_line}
            checked={checkedStatus()}
            onCheck={handleCheck} />
    )
}

function mapStateToProps(state) {
    return {
        selectedLines: state.selectedLines
    }
}

export default connect(mapStateToProps, { selectLines })(OneLine);