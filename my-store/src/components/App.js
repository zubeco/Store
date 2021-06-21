import React from 'react'; 
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

import ShopProvider from '../context/ShopContext';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import Store from '../pages/Store';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();


const App = () => {
  return (
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <Router>
            <Navbar />
            <Cart />
            <Switch>
              <Route path="/" exact><HomePage /></Route>
              <Route path="/product/:id" exact><ProductPage /></Route>
              <Route path="/store" exact><Store /></Route>

            </Switch>
          </Router>
        </StyletronProvider>
      </ShopProvider>
  )
}

export default App

