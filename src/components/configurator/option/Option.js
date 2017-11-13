import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import { connect } from 'react-redux';
// import { selectOptions } from './../../../redux/reducer';

function Option(props) {

    return (
        <Checkbox
            label={props.obj.option} />
    )
}

export default Option;