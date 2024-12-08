'use client'
import React from "react";

const Popup = ({ appName, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-700 text-white p-6 rounded shadow-lg">
        <p className="text-lg mb-4">
          Would you like to remove <strong>{appName}</strong>?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Remove
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-black bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
