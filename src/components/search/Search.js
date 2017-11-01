import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMakes } from './../../redux/reducer';

class Search extends Component {

    componentDidMount() {
        this.props.getAllMakes();
    }

    render() {
        // need to make this a controlled component so checked status takes value from state. also need to add onChange. need to figure out if this should be in another component and where it should go and how to subscribe it to the data it needs and how to get it back into the main Search Component
        let makesList = this.props.allMakes.map(obj => {
            return (
                <div key={obj.id}>
                    <input
                        name={obj.make}
                        type="checkbox"
                    />
                    {obj.make}
                </div>
            )
        })

        return (
            <div>
                This is the Search Component
                {makesList}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allMakes: state.allMakes
    }
}

export default connect(mapStateToProps, { getAllMakes })(Search);
