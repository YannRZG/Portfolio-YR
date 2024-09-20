import React, { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars');

    // Générer des étoiles
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1; // Taille aléatoire entre 1 et 4
      const left = Math.random() * 100; // Position horizontale aléatoire
      const top = Math.random() * 100; // Position verticale aléatoire

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${left}vw`;
      star.style.top = `${top}vh`;

      starsContainer.appendChild(star);
    }

    // Générer des étoiles filantes
    const generateShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      const left = Math.random() * 100; 
      const top = Math.random() * 100; 

      shootingStar.style.left = `${left}vw`;
      shootingStar.style.top = `${top}vh`;

      const duration = Math.random() * 2 + 1; // Durée entre 1 et 3 secondes
      shootingStar.style.animationDuration = `${duration}s`;

      starsContainer.appendChild(shootingStar);

      setTimeout(() => {
        starsContainer.removeChild(shootingStar);
      }, duration * 1000); 
    };

    const shootingStarInterval = setInterval(generateShootingStar, 3000);

    // Générer les planètes
    const planets = [
      { name: 'Mercury', size: '6px', color: '#B5B5B5', left: '15vw', top: '20vh' },
      { name: 'Venus', size: '10px', color: '#E8B79A', left: '25vw', top: '30vh' },
      { name: 'Earth', size: '10px', color: '#4A90E2', left: '35vw', top: '40vh' },
      { name: 'Mars', size: '8px', color: '#C1440E', left: '45vw', top: '50vh' },
      { name: 'Jupiter', size: '14px', color: '#D19A8A', left: '65vw', top: '25vh' },
      { name: 'Saturn', size: '12px', color: '#D5C39E', left: '75vw', top: '30vh' },
      { name: 'Uranus', size: '10px', color: '#A4C8E1', left: '85vw', top: '40vh' },
      { name: 'Neptune', size: '10px', color: '#5D7C9A', left: '95vw', top: '50vh' },
    ];

    planets.forEach((planet) => {
      const planetDiv = document.createElement('div');
      planetDiv.className = 'planet';
      planetDiv.style.width = planet.size;
      planetDiv.style.height = planet.size;
      planetDiv.style.backgroundColor = planet.color;
      planetDiv.style.left = planet.left;
      planetDiv.style.top = planet.top;

      starsContainer.appendChild(planetDiv);
    });

    // Ajouter le soleil
    const sun = document.createElement('div');
    sun.className = 'sun';
    starsContainer.appendChild(sun);

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div>
      <div className="stars"></div>
      <div className="milky-way"></div>
    </div>
  );
};

export default StarsBackground;
