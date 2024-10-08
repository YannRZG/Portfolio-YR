// SolarSystemBackground.js
import React, { useEffect } from 'react';
import * as THREE from 'three';

const SolarSystemBackground = () => {
    useEffect(() => {
        // Variables de la scène
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha pour la transparence
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Création des étoiles
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 2000;
        const positionArray = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount * 3; i++) {
            positionArray[i] = (Math.random() - 0.5) * 100; // Positionnement aléatoire
        }
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

        const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Création du soleil
        const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        // Création des planètes
        const planets = [];
        const planetData = [
            { radius: 0.3, distance: 2, color: 0x555555, orbitSpeed: 0.1 },
            { radius: 0.5, distance: 3, color: 0xFF4500, orbitSpeed: 0.07 },
            { radius: 0.4, distance: 4, color: 0x1E90FF, orbitSpeed: 0.05 },
            { radius: 0.6, distance: 5, color: 0xFFD700, orbitSpeed: 0.04 },
            { radius: 0.7, distance: 6, color: 0x8B4513, orbitSpeed: 0.03 },
            { radius: 0.5, distance: 7, color: 0xFF69B4, orbitSpeed: 0.02 }
        ];

        planetData.forEach(data => {
            const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: data.color });
            const planet = new THREE.Mesh(geometry, material);
            planets.push({ mesh: planet, distance: data.distance, angle: 0, speed: data.orbitSpeed });
            scene.add(planet);
        });

        // Positionnement de la caméra
        camera.position.z = 10;

        // Fonction d'animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotation du soleil
            sun.rotation.y += 0.01;

            // Rotation des planètes autour du soleil
            planets.forEach(planet => {
                planet.angle += planet.speed; // Met à jour l'angle
                const x = planet.distance * Math.cos(planet.angle);
                const z = planet.distance * Math.sin(planet.angle);
                planet.mesh.position.set(x, 0, z); // Positionne la planète
            });

            // Rendu de la scène
            renderer.render(scene, camera);
        };

        // Écouteur d'événements pour redimensionner la fenêtre
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        // Démarrer l'animation
        animate();

        // Nettoyage lors du démontage du composant
        return () => {
            document.body.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return null; // Pas besoin de retourner du JSX
};

export default SolarSystemBackground;
