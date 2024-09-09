// Cat.jsx
import CatImage from '/src/assets/Chaton.png'; // Chemin correct vers votre image

const Cat = () => (
  <img
    src={CatImage}
    alt="Cat"
    className="w-32 h-32 object-cover"
  />
);

export default Cat;