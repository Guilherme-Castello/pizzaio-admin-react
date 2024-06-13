// src/components/PizzaCreator.js
import React, { useState } from 'react';
import Button from '../components/Button';
import api_client from '../config/api_client';
import { useNavigate  } from 'react-router-dom';
import Input from '../components/Input';

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
        <Input value={flavour} setValue={setflavour} label='Nome da pizza'/>
        <Input value={description} setValue={setDescription} label='Descrição'/>
        <Input value={priceInCents} setValue={setPriceInCents} label='Preço'/>
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
