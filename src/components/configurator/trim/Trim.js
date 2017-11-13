import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import { connect } from 'react-redux';
// import { selectTrims } from './../../../redux/reducer';

function Trim(props) {

    return (
        <Checkbox
            label={props.obj.trim} />
    )
}

export default Trim;