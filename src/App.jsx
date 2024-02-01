import { useState,useEffect } from 'react';
import Products from "./Components/Products"
import"bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Cart from './Components/Cart';
import Product from './Components/Product';
import { Provider } from 'react-redux';
import store from "./store/store";

function App() {
  
  return (
    <>
      <div>
        <Provider store={store}>

        <Router>
          <NavBar/>
         
          <Routes>
            <Route path='/products' element={<Product/>}/> 
            <Route path='/cart' element={<Cart/>}/>
          </Routes>

        </Router>
        </Provider>
       
       
      </div>

     
    </>
  )
}

export default App
