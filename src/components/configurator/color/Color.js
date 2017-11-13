import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import { connect } from 'react-redux';
// import { selectColors } from './../../../redux/reducer';

function Color(props) {

    return (
        <Checkbox
            label={props.obj.color} />
    )
}

export default Color;