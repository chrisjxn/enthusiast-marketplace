import React from 'react';
import './ConfigResult.css';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

export default function ConfigResult(props) {
    return (
        <div className="configResult_wrapper">
            <Link to={`/listing/${props.obj.id}`} className="listing_link_text">
                <div className="configResult_flex">
                    <Paper className="paper" zDepth={4}>
                        <img className="cover_photo" src={props.obj.photo1} alt='cover' />
                    </Paper>
                    <div className="configResult_row">
                        <div className="row1_price_miles">{`$${props.obj.price}`}</div>
                        <div className="row1_title">{`${props.obj.year} ${props.obj.make} ${props.obj.model} (${props.obj.generation})`}</div>
                        <div className="row1_price_miles">{`${props.obj.miles} miles`}</div>
                    </div>
                    <div className="configResult_row">
                        <div className="row2_transmission">{`${props.obj.transmission}`}</div>
                        <div className="row2_owners">{`${props.obj.owners}`}</div>
                        <div className="row2_color_interior">{`${props.obj.color} | ${props.obj.interior}`}</div>
                        <div className="row2_location">{`${props.obj.location}`}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}