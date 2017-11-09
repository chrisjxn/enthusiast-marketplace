import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home_wrapper">
            <div className="search_button">
                <Link to='/search' className="search_link_text">Find your car</Link>
            </div>
        </div>
    )
}