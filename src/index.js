import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Components
import { Header } from './components/Header';
import { ProductContainer } from './components/ProductContainer';


ReactDOM.render(
  <React.Fragment>
    <Header />
    <ProductContainer />
  </React.Fragment>,
  document.getElementById('root')
);