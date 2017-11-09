import React from 'react';
import { pluck } from 'underscore';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { selectModels } from './../../../../redux/reducer';

function Model(props) {

    const handleCheckboxToggle = () => {
        props.selectModels(props.obj.id, props.obj.model)
    }

    const checkedStatus = () => {
        return pluck(props.selectedModels, 'id').includes(props.obj.id)
        // checks to see whether the selectedModels array includes the modelId and returns true or false, which sets the checked value for the checkbox
    }

    return (
        <Checkbox
            label={props.obj.model}
            checked={checkedStatus()}
            onCheck={handleCheckboxToggle} />
    )
}

function mapStateToProps(state) {
    return {
        selectedModels: state.selectedModels
    }
}

export default connect(mapStateToProps, { selectModels })(Model);