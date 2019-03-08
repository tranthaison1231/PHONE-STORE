import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Navbar />
       <Switch>
         <Route exact path="/details" component={Details}/>
         <Route exact path="/cart" component={Cart}/> 
         <Route exact path="/" component={ProductList}/>
         <Route component={Default}/>
       </Switch>
      </React.Fragment>
    );
  }
}

export default App;
