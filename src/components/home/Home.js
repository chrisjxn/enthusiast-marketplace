import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            This is the Home Component
            <Link to='/search'>Search cars</Link>
        </div>
    )
}