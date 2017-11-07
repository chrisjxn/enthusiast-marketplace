import React, { Component } from 'react';
import './Search.css';
import Makes from './makes/Makes';
import Lines from './lines/Lines';
import Generations from './generations/Generations';
import Models from './models/Models';

class Search extends Component {
    render() {
        return (
            <div className="search_wrapper">
                <Makes />
                <Lines />
                <Generations />
                <Models />
            </div>
        )
    }
}

export default Search;
