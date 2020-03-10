import React from 'react';
import './App.css';
import Navigation from './components/Nav'
import Footer from './components/Footer'
import Routes from './utils/routes';

function App() {
  return (
    <div>
      <Navigation />
      <div className='body'>
        <Routes />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
