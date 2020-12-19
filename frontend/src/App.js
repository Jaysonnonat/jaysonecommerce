import React from 'react';

function App() {
  return (
    <div className='grid'> 
      <header className="row">
          <div>
              <a className="logo" href="index.html"> JNN Store</a>
          </div>
          <div>
              
              <a href="signin.html"> Sign In</a>
              <a href="info.html"> Info</a>
          </div>
      </header>
      <main>
        <div className="row center">
          <div className="item">
            <a href="product.html">
              <img className="small" src="./images/bed.png" alt=""></img>
            </a>
            <div className="item-body">
              <h2> Item</h2>
              <div className="price">
                  <h2>$10</h2>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="row center"> All Rights Reserved</footer>
    </div>
    
  );
}

export default App;
