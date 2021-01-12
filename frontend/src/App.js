import React from 'react';
import {BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Information from './pages/Information';
import data from './data.js'


function App() {
  return (    
    <BrowserRouter>
    <div className='grid'> 
      <header className="row">
          <div>
            <Link to='/' className="logo">JNN Store</Link>
          </div>
          <div>  
              <Link to='/signin'>Sign In</Link>
              <Link to='/Information'>Information</Link>
          </div>
      </header>
      <main>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/Information' component={Information}></Route>
        </Switch>
      </main>

      <footer className="row center"> All Rights Reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
