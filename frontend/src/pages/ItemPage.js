import React from 'react'
import data from './../data.js'

export default function Item(props) {
    return (
        <div className="row center">
            {props.match.params.id}
            
        </div>
    )
}