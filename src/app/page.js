'use client'
import React, { useState } from "react";
import Header from "./components/navbar/page";
import Sidebar from "./components/sidebar/page";
import Main from "./components/main/page";
import Footer from "./components/footer/page";

export default function Home() {
  const [selectedApp, setSelectedApp] = useState(null);

  const handleAppSelect = (appName) => {
    setSelectedApp(appName);
  };

  const handleAppRemove = (appName) => {
    alert(`${appName} has been removed.`);
    setSelectedApp(null);
  };

  return (
    <div className="flex flex-col h-screen">
   
      <div className="flex flex-1">
        <Sidebar onAppSelect={handleAppSelect} />
        <Main selectedApp={selectedApp} onRemove={handleAppRemove} />
      </div>
      
    </div>
  );
}
