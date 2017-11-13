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
    }

    render() {
        console.log(this.props.trims)
        console.log(this.props.engines)
        console.log(this.props.transmissions)
        console.log(this.props.colors)
        console.log(this.props.interiors)
        console.log(this.props.packages)
        console.log(this.props.options)

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

        return (
            <div>
                <div>Trims</div>
                <div>{trimsList}</div>
                <div>Engines</div>
                <div>{enginesList}</div>
                <div>Transmissions</div>
                <div>{transmissionsList}</div>
                <div>Colors</div>
                <div>{colorsList}</div>
                <div>Interiors</div>
                <div>{interiorsList}</div>
                <div>Packages</div>
                <div>{packagesList}</div>
                <div>Options</div>
                <div>{optionsList}</div>
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
        options: state.options
    }
}

export default connect(mapStateToProps, { getTrims, getEngines, getTransmissions, getColors, getInteriors, getPackages, getOptions })(Configurator)