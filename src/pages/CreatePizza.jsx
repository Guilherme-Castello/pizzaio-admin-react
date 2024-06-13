// src/components/PizzaCreator.js
import React, { useState } from 'react';
import Button from '../components/Button';
import api_client from '../config/api_client';
import { useNavigate  } from 'react-router-dom';
import Input from '../components/Input';
import PizzaioBlock from '../components/PizzaioBlock';

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
    <PizzaioBlock name='Criar Pizza'>
      <Input value={flavour} setValue={setflavour} label='Nome da pizza'/>
      <Input value={description} setValue={setDescription} label='Descrição'/>
      <Input value={priceInCents} setValue={setPriceInCents} label='Preço'/>
      <Button
        onClick={handleAddPizza}
        extraClasses='!bg-green-600'
      >
        Adicionar Pizza
      </Button>
    </PizzaioBlock>
  );
};
