import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, image, title, content, projectUrl, codeUrl, buttonLabel1, buttonLabel2 }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 bg-black opacity-70 backdrop-blur-xl" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 z-10 shadow-lg max-w-3xl w-5/6 flex"
      >
        {/* Image Section */}
        {image && (
          <div className="flex items-center w-1/3 mr-4">
            <img src={image} alt={title} className="w-full h-auto rounded-md" />
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">{title}</h2>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-300">{content}</p>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end space-x-4">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                {buttonLabel2}
              </a>
            )}

            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                {buttonLabel1}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
