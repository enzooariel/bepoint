// frontend/src/components/Eventos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      const { data } = await axios.get('/api/eventos');
      setEventos(data);
    };

    fetchEventos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Eventos</h1>
      <ul>
        {eventos.map(evento => (
          <li key={evento._id} className="mb-2 p-2 border rounded">
            <h2 className="text-xl font-semibold">{evento.title}</h2>
            <p>{evento.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eventos;