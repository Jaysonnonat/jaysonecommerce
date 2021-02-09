import React from 'react'
import { Link } from 'react-router-dom'
import { data } from './../data.js'

export default function Home() {
    return (
        <div className="row center">
          {
            data.items.map(item => 
              <div className="item">
              
              <Link to={'/item/' + item.id} >
               <img className="small" src={item.image} alt=""></img>
              </Link>

              <div className="item-body">
                <div> {item.name}</div>
                <div className="price">
                  <h2>${item.price}</h2>
                </div>
              </div>
            </div>  
            )
          }

        </div>
    )
}
