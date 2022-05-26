import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Details from './components/Details';
import Header from './components/Header'
import Mcq from './components/Mcq'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Registration from './components/Registration';

function App() {
  

  return (
    <div className="App">
      <Registration/>
      
    </div>
  );
}

export default App;
