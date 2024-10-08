import React, { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars');

    // Vérification de l'existence du conteneur avant d'ajouter les éléments
    if (starsContainer) {
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
          if (starsContainer.contains(shootingStar)) {
            starsContainer.removeChild(shootingStar);
          }
        }, duration * 1000);
      };

      const shootingStarInterval = setInterval(generateShootingStar, 3000);

      // Générer les planètes et le système solaire
      const solarSystem = document.createElement('div');
      solarSystem.className = 'solar-system';
      starsContainer.appendChild(solarSystem);

      const planets = [
        { name: 'Mercury', size: '6px', color: '#B5B5B5', orbitSize: '50px', duration: '5s' },
        { name: 'Venus', size: '10px', color: '#E8B79A', orbitSize: '70px', duration: '7s' },
        { name: 'Earth', size: '10px', color: '#4A90E2', orbitSize: '90px', duration: '10s' },
        { name: 'Mars', size: '8px', color: '#C1440E', orbitSize: '110px', duration: '12s' },
        { name: 'Jupiter', size: '14px', color: '#D19A8A', orbitSize: '150px', duration: '20s' },
        { name: 'Saturn', size: '12px', color: '#D5C39E', orbitSize: '180px', duration: '25s' },
        { name: 'Uranus', size: '10px', color: '#A4C8E1', orbitSize: '200px', duration: '30s' },
        { name: 'Neptune', size: '10px', color: '#5D7C9A', orbitSize: '220px', duration: '35s' },
      ];

      planets.forEach((planet) => {
        const orbitDiv = document.createElement('div');
        orbitDiv.className = 'orbit';
        orbitDiv.style.width = planet.orbitSize;
        orbitDiv.style.height = planet.orbitSize;
        orbitDiv.style.animationDuration = planet.duration;

        const planetDiv = document.createElement('div');
        planetDiv.className = 'planet';
        planetDiv.style.width = planet.size;
        planetDiv.style.height = planet.size;
        planetDiv.style.backgroundColor = planet.color;

        orbitDiv.appendChild(planetDiv);
        solarSystem.appendChild(orbitDiv);
      });

      // Ajouter le soleil
      const sun = document.createElement('div');
      sun.className = 'sun';
      solarSystem.appendChild(sun);

      return () => {
        clearInterval(shootingStarInterval);
      };
    }
  }, []);

  return (
    <div>
      <div className="stars"></div>
      <div className="milky-way"></div>
    </div>
  );
};

export default StarsBackground;
