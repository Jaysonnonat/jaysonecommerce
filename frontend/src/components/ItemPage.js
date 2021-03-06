import React from 'react'
import {data} from '../data.js'

export default function Item(props) {
    console.log(props.match.params.id);
    const item  = data.items.find(item => parseInt(item.id)  === parseInt(props.match.params.id) );
    return (
        <div className="row center">
            <div>
                <div className="header">
                    {item.name}
                </div>
                <img className="large" src={"./."+item.image} alt="something"></img>
            </div>
            <div>
                <ul className="details" >
                    <li>
                        <div>
                            Description:
                            {item.description}
                        </div>
                    </li>
                    <li>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <button>
                            Buy
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}