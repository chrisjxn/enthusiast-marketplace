import React, { Component } from 'react';
import './Configurator.css';
import { connect } from 'react-redux';
import { getTrims } from './../../redux/reducer';
import { getEngines } from './../../redux/reducer';
import { getTransmissions } from './../../redux/reducer';
import { getColors } from './../../redux/reducer';
import { getInteriors } from './../../redux/reducer';
import { getPackages } from './../../redux/reducer';
import { getOptions } from './../../redux/reducer';
import { getAllListings } from './../../redux/reducer';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import Trim from './trim/Trim';
import Engine from './engine/Engine';
import Transmission from './transmission/Transmission';
import Color from './color/Color';
import Interior from './interior/Interior';
import Package from './package/Package';
import Option from './option/Option';

class Configurator extends Component {

    componentDidMount() {
        this.props.getTrims(this.props.match.params.yearId);
        this.props.getEngines(this.props.match.params.yearId);
        this.props.getTransmissions(this.props.match.params.yearId);
        this.props.getColors(this.props.match.params.yearId);
        this.props.getInteriors(this.props.match.params.yearId);
        this.props.getPackages(this.props.match.params.yearId);
        this.props.getOptions(this.props.match.params.yearId);
        this.props.getAllListings();
    }

    render() {
        console.log(this.props.trims)
        console.log(this.props.engines)
        console.log(this.props.transmissions)
        console.log(this.props.colors)
        console.log(this.props.interiors)
        console.log(this.props.packages)
        console.log(this.props.options)
        console.log(this.props.allListings)

        const trimsList = this.props.trims.length === 0 ?
            <div>Loading...</div> :
            this.props.trims.map(obj => {
                return (
                    <Trim key={obj.trim} obj={obj} />
                )
            })

        const enginesList = this.props.engines.length === 0 ?
            <div>Loading...</div> :
            this.props.engines.map(obj => {
                return (
                    <Engine key={obj.engine} obj={obj} />
                )
            })

        const transmissionsList = this.props.transmissions.length === 0 ?
            <div>Loading...</div> :
            this.props.transmissions.map(obj => {
                return (
                    <Transmission key={obj.transmission} obj={obj} />
                )
            })

        const colorsList = this.props.colors.length === 0 ?
            <div>Loading...</div> :
            this.props.colors.map(obj => {
                return (
                    <Color key={obj.color} obj={obj} />
                )
            })

        const interiorsList = this.props.interiors.length === 0 ?
            <div>Loading...</div> :
            this.props.interiors.map(obj => {
                return (
                    <Interior key={obj.interior} obj={obj} />
                )
            })

        const packagesList = this.props.packages.length === 0 ?
            <div>Loading...</div> :
            this.props.packages.map(obj => {
                return (
                    <Package key={obj.package} obj={obj} />
                )
            })

        const optionsList = this.props.options.length === 0 ?
            <div>Loading...</div> :
            this.props.options.map(obj => {
                return (
                    <Option key={obj.option} obj={obj} />
                )
            })

        const vehicle = this.props.allListings.length === 0 ?
            <div className="vehicle">Loading...</div> :
            <div className="vehicle">{`${this.props.allListings[0].year} ${this.props.allListings[0].make} ${this.props.allListings[0].model} (${this.props.allListings[0].generation})`}</div>

        return (
            <div className="configurator_background">
                <div className="configurator_wrapper">
                    <div className="refine_search_header">Refine Search</div>
                    {vehicle}
                    <div className="columns_wrapper">
                        <div className="configurator_column">
                            <Paper className="list_section" zDepth={3}>
                                <div className="list_section_header">Trims</div>
                                <div>{trimsList}</div>
                            </Paper>
                            <Paper className="list_section" zDepth={3}>
                                <div className="list_section_header">Engines</div>
                                <div>{enginesList}</div>
                            </Paper>
                            <Paper className="list_section" zDepth={3}>
                                <div className="list_section_header">Transmissions</div>
                                <div>{transmissionsList}</div>
                            </Paper>
                        </div>
                        <div className="configurator_column">
                            <Paper className="list_section" zDepth={3}>
                                <div className="list_section_header">Colors</div>
                                <div>{colorsList}</div>
                            </Paper>
                            <Paper className="list_section" zDepth={3}>
                                <div className="list_section_header">Interiors</div>
                                <div>{interiorsList}</div>
                            </Paper>
                        </div>
                        <div className="configurator_column">
                            <Paper className="list_section" zDepth={3}>
                                <div className="list_section_header">Packages</div>
                                <div>{packagesList}</div>
                            </Paper>
                            <Paper className="list_section" zDepth={3}>
                                <div className="list_section_header">Options</div>
                                <div>{optionsList}</div>
                            </Paper>
                        </div>
                    </div>
                    <div className="config_results_button_wrapper">
                    <Paper className="config_results_button" zDepth={3}>
                        <Link to={`/configresults/${this.props.selectedColors[0]}`} className="config_results_link_text">Get Results</Link>
                    </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        trims: state.trims,
        engines: state.engines,
        transmissions: state.transmissions,
        colors: state.colors,
        interiors: state.interiors,
        packages: state.packages,
        options: state.options,
        allListings: state.allListings,
        selectedColors: state.selectedColors
    }
}

export default connect(mapStateToProps, { getTrims, getEngines, getTransmissions, getColors, getInteriors, getPackages, getOptions, getAllListings })(Configurator)