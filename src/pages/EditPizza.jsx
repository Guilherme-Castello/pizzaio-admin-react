import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api_client from '../config/api_client';
import Input from '../components/Input';

export default function EditPizza() {
  const { id } = useParams();
  const [flavour, setFlavour] = useState('');
  const [description, setDescription] = useState('');
  const [priceInCents, setPriceInCents] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      const response = await api_client.get(`pizzas/${id}`);
      const { flavour, description, price_in_cents } = response.data.pizza;
      setFlavour(flavour);
      setDescription(description);
      setPriceInCents(price_in_cents);
    }
    fetchPizza();
  }, [id]);

  async function handleEditPizza() {
    await api_client.put(`pizzas/${id}`, { flavour, price_in_cents: parseInt(priceInCents), description, size: 32 })
      .then(response => console.log(response));
    navigate('/');
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Edição de Pizzas</h1>
      <div className="bg-yellow-400/50 p-4 rounded-lg mb-4">
        <Input value={flavour} setValue={setFlavour} label='Nome da pizza'/>
        <Input value={description} setValue={setDescription} label='Nome da pizza'/>
        <Input value={priceInCents} setValue={setPriceInCents} label='Nome da pizza'/>
        <Button
          onClick={handleEditPizza}
          extraClasses='!bg-green-600'
        >
          Atualizar Pizza
        </Button>
      </div>
    </div>
  );
}
