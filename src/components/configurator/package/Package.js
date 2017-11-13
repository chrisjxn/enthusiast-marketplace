import React from 'react';
import Checkbox from 'material-ui/Checkbox';
// import { connect } from 'react-redux';
// import { selectPackages } from './../../../redux/reducer';

function Package(props) {

    return (
        <Checkbox
            label={props.obj.package} />
    )
}

export default Package;