

import { useState } from 'react';
import './App.css';
import Auth from './fragments/Auth';
import Home from './fragments/Home';
import useAuth from './hooks/useAuth';


function App() {
  const { isAuth } = useAuth()

  return (
    <div className="App">
      { isAuth ? <Home/>:<Auth/> }
    </div>
  );
}

export default App;
