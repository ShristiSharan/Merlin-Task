import Snowfall from 'react-snowfall';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';

import { UIProvider } from './context/UiContext';

function App() {
 

  
 
  return (
    <UIProvider>
    <div >
      {/* <Home /> */}
      {/* Hi */}
      <Snowfall />
      <Header />
      <Home />
      
    
      </div>
    </UIProvider>
  );
}

export default App;
