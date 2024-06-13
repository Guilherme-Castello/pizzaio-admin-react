// src/components/PizzaCreator.js
import React, { useState } from 'react';
import Button from '../components/Button';
import api_client from '../config/api_client';
import { useNavigate  } from 'react-router-dom';

export default function CreatePizza() {
  const [flavour, setflavour] = useState('');
  const [description, setDescription] = useState('');
  const [priceInCents, setPriceInCents] = useState('');
  const navigate = useNavigate();
  async function handleAddPizza(){
    await api_client.post('pizzas', {flavour, price_in_cents: parseInt(priceInCents), size: 32, description}).then(response => console.log(response))
    navigate('/')
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Criação de Pizzas</h1>
      <div className="bg-yellow-400/50 p-4 rounded-lg mb-4">
        <label className="block mb-2">Nome da Pizza</label>
        <input
          type="text"
          value={flavour}
          onChange={(e) => setflavour(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <label className="block mb-2">Pizza description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <label className="block mb-2">Preço</label>
        <input
          type="text"
          value={priceInCents}
          onChange={(e) => setPriceInCents(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <Button
          onClick={handleAddPizza}
          extraClasses='!bg-green-600'
        >
          Adicionar Pizza
        </Button>
      </div>
    </div>
  );
};
