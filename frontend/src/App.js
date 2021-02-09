import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import ItemPage from './components/ItemPage';
import Checkout from './components/Checkout';

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
            <Link to='/checkout'>Shopping Cart</Link>
          </div>
      </header>
      <main>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/item/:id' component={ItemPage}></Route>
          <Route path='/checkout/:id?' component={Checkout}></Route>
        </Switch>
      </main>

      <footer className="row center"> All Rights Reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
