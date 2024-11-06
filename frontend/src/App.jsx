// frontend/src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Eventos from './components/Eventos';
import FormularioEvento from './components/FormularioEvento';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/crear-evento" element={<FormularioEvento />} />
      </Routes>
    </div>
  );
};

export default App;