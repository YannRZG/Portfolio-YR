// ModalBuild.jsx

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-lg font-bold text-gray-800">Projet en construction</h2>
        <p className="mt-2 text-gray-600">Ce projet est actuellement en cours de construction. Merci de votre patience !</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
