import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import { connect } from 'react-redux';
// import { selectInteriors } from './../../../redux/reducer';

function Interior(props) {

    return (
        <Checkbox
            label={props.obj.interior} />
    )
}

export default Interior;