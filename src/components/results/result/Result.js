import React from 'react';
import { Link } from 'react-router-dom';

export default function OneResult(props) {
    return (
        <div>
            <Link to={`/listing/${props.obj.id}`}>
                <div>.</div>
                <div>{props.obj.year}</div>
                <div>{props.obj.make}</div>
                <div>{props.obj.line}</div>
                <div>{props.obj.generation}</div>
                <div>{props.obj.model}</div>
                <div>{props.obj.id}</div>
                <div>.</div>
            </Link>
        </div>
    )
}