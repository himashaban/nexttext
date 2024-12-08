'use client'
import React from 'react'


const Sidebar = ({ onAppSelect }) => {
  const apps = [
    "Amazon Prime Video",
    "Netflix",
    "Shahid",
    "StarPlay Z",
    "Youtube",
  ];

  return (
    <aside className="w-64 bg-gray-900 h-full py-4 px-3">
      <ul className="space-y-3">
        {apps.sort().map((app, index) => (
          <li
            key={index}
            onClick={() => onAppSelect(app)}
            className="cursor-pointer p-2 rounded hover:bg-gray-700 text-white"
          >
            {app}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

