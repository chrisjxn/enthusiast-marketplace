import React from 'react';
import Checkbox from 'material-ui/Checkbox';


export default function CheckboxBuilder(props) {
    return (
        <Checkbox
            label={props.obj.make} />
    )
}

// need to make this a controlled component so checked status takes value from state. also need to add onChange. need to figure out how to subscribe it to the data it needs and how to get it back into the parent Makes Component