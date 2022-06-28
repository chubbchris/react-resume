import React from 'react';
import About  from './compononents/About';
import Nav from './compononents/Nav';
import ContactMe from './compononents/contact-me';
import Resume from './compononents/resume';
import Portfolio from './compononents/Portfolio';
import './App.css';
import{useState} from 'react'
function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: '',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false)
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected = {resumeSelected}
        setResumeSelected = {setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
      <About></About>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>

          </>
        ) : (
            <ContactMe></ContactMe>
          )
          }
          {!resumeSelected ? (
            <>
            </>
          )
        :(
          <Resume></Resume>
        )}
      </main>
    </div>
  );
}

export default App;
