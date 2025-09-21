import React, { useState } from 'react';
import './App.css'
import { Routes ,Route} from 'react-router-dom';
import Home from "../src/pages/Home"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/store/Store';

function App() {

  return (
    <>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <Routes>      
      <Route path='/' element={<Home/>}/>     
    </Routes>    
    </PersistGate>
          </Provider>

    </>
  )
}

export default App
