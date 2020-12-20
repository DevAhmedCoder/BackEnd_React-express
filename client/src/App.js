import React, { Fragment } from 'react';
import './App.css';
import InputProduct from './Components/inputProduct';
import ListProduct from './Components/ListProduct';


function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputProduct />
        <ListProduct/>
      </div>
    </Fragment>
  );
}

export default App;
