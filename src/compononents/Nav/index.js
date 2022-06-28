import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import{useEffect} from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
    aboutSelected,
    setAboutSelected,
  } = props;
  
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 💻 </span> Christopher Chubb
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
        <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {setAboutSelected(true);
                 setResumeSelected(false);
                  setContactSelected(false);}}>About me</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                  setAboutSelected(false);
                  setResumeSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          )
            )}
            <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => {setResumeSelected(true);
                                setAboutSelected(false);    
                                setContactSelected(false)}}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;