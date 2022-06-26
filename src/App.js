import React from 'react';
import About  from './compononents/About';
import Nav from './compononents/Nav';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
