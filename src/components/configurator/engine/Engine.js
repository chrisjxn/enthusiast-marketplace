import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import { connect } from 'react-redux';
// import { selectEngines } from './../../../redux/reducer';

function Engine(props) {

    return (
        <Checkbox
            label={props.obj.engine} />
    )
}

export default Engine;