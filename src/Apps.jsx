// src/App.jsx
import React, { useEffect } from 'react';
import MinhasRotas from './MinhasRotas';

const App = () => {
  useEffect(() => {
    document.title = 'ola';
  }, []);

  return (
    <div>
      <MinhasRotas/>
    </div>
  );
}

export default App;
