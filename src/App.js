import React, { useEffect, useState } from 'react';
import './App.css';
import Charts from './Charts';

function App() {
  const [largeur, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div className="App">
      <Charts window={largeur} />
    </div>
  );
}

export default App;
