import React from 'react';
import './Home.css';
import circleLogo from './../../assets/halcyon-logo3.png';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import helipad from './../../assets/helipad.mp4';

export default function Home() {
    return (
        <div className="home_wrapper">
            <div>
                <img className="circle_logo" src={circleLogo} alt='circle logo' />
            </div>
            <Paper className="search_button" zDepth={3}>
                <Link to='/search' className="search_link_text">Find your car</Link>
            </Paper>
            <video className="video" autoPlay muted loop>
                <source src={helipad} type="video/mp4" />
            </video>
        </div>
    )
}