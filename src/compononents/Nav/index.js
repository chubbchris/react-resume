import React from "react";
import {capitalizeFirstLetter} from "../../utils/helpers"
import {useEffect} from 'react';
function Nav (props){
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;
useEffect(()=>{
    document.title=capitalizeFirstLetter(currentCategory.name);
},[currentCategory]);
        return (
          <header className="flex-row px-1">
            <h2>
              <a data-testid="link" href="/">
                <span role="img" aria-label="computer">
                  {" "}
                  💻 
                </span>{" "}
                Christopher Chubb
              </a>
            </h2>
            <nav>
              <ul className="flex-row">
                {categories.map((category) => (
                  <li className={`mx-1 ${
                      currentCategory.name === category.name && 'navActive'
                      }`} key={category.name}>
                    <span
                      onClick={() => {
                        setCurrentCategory(category)
                      }}
                    >
                      {capitalizeFirstLetter(category.name)}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
        </header>
    );
}

export default Nav;