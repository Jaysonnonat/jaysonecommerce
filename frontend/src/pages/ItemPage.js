import React from 'react'
import data from './../data.js'

export default function Item(props) {
    console.log(props.match.params.id);
    const item  = data.items.find(item => item.id == props.match.params.id);
    return (
        <div className="row center">
            <div>
                <div className="header">
                    {item.name}
                </div>
                <img className="large" src={"./."+item.image} alt="something"></img>
            </div>
        </div>
    )
}