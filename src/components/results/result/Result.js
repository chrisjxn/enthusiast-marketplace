import React from 'react';
import './Result.css';
import { Link } from 'react-router-dom';

export default function Result(props) {
    return (
        <div className="result_wrapper">
            <Link to={`/listing/${props.obj.id}`} className="listing_link_text">
                <div className="result_flex">
                    <img className="cover_photo" src={props.obj.photo1} alt='cover' />
                    <div>{`Year: ${props.obj.year}`}</div>
                    <div>{`Make: ${props.obj.make}`}</div>
                    <div>{`Line: ${props.obj.line}`}</div>
                    <div>{`Generation: ${props.obj.generation}`}</div>
                    <div>{`Model: ${props.obj.model}`}</div>
                </div>
            </Link>
        </div>
    )
}