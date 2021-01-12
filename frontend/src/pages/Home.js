import React from 'react'
import data from './../data.js'

export default function Home() {
    return (
        <div className="row center">
          {
            data.items.map(item => 
              <div className="item">
              <a href="product.html">
                <img className="small" src={item.image} alt=""></img>
              </a>
              <div className="item-body">
                <div> {item.name}</div>
                <div className="price">
                    <h2>$10</h2>
                </div>
              </div>
            </div>  
            )
          }

        </div>
    )
}
