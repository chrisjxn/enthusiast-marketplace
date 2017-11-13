import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import { connect } from 'react-redux';
// import { selectTransmissions } from './../../../redux/reducer';

function Transmission(props) {

    return (
        <Checkbox
            label={props.obj.transmission} />
    )
}

export default Transmission;