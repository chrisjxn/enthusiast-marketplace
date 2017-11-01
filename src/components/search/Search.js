import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMakes } from './../../redux/reducer';

class Search extends Component {

    componentDidMount() {        
        this.props.getAllMakes();
    }

    render() {
        let makesList = this.props.allMakes.map(obj => {
            return <p key={obj.id}>{obj.make}</p>
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
