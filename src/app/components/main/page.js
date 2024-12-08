'use client'
import React, { useState } from "react";
import Popup from "../popup/page";

const Main = ({ selectedApp, onRemove }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleRemoveClick = () => {
    setShowPopup(true);
  };

  const handleRemoveConfirm = () => {
    onRemove(selectedApp);
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <main className="flex-1 p-6  text-white bg-gray-700">
      {selectedApp ? (
        <>
          <h2 className="text-xl font-semibold">Application: {selectedApp}</h2>
          <p>Selected on: {new Date().toLocaleString()}</p>
          <p>User: testuser@email.com</p>
          <button
            onClick={handleRemoveClick}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Remove
          </button>
        </>
      ) : (
        <p className="text-gray-500">Select an application from the sidebar.</p>
      )}

      {showPopup && (
        <Popup
          appName={selectedApp}
          onClose={handleClose}
          onConfirm={handleRemoveConfirm}
        />
      )}
    </main>
  );
};

export default Main;
