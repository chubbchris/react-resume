import React from 'react';
import { useState } from 'react';
import About  from './compononents/About';
import Nav from './compononents/Nav';
import Portfolio from './compononents/Portfolio';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Short bio of me ',
    },
    { name: 'Portfolio', description: 'Links to my Projects Github and deployed links ' },
    { name: 'Contact Me', description: 'leave a comment and contact informantion' },
    { name: 'Resume', description: 'A download of my resume' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
