import React from 'react'
import {useState} from 'react';
import [photos] from '../../assets/small';


function PhotoList() {
  const [photos] = useState([
    {
      name: 'Whats for Dinner ',
      category: 'portfolio',
      description: 'This is a application that will pick a random food recipe and a random beer from a menu for you to have a unique dinner experience.',
    },
    {
      name: 'Weather App',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'asssibilty website',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'note taker',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'budget list',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'employee tracker',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);
  return (
    <div>
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/small/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );

export default PhotoList;