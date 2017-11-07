import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { selectModels } from './../../../../redux/reducer';

function Model(props) {

    const handleCheckboxToggle = () => {
        props.selectModels(props.obj.id)
    }

    const checkedStatus = () => {
        return props.selectedModels.includes(props.obj.id)
        // checks to see whether the selectedModels array includes the model and returns true or false, which sets the checked value for the checkbox
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