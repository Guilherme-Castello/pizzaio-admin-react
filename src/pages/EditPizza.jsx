import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api_client from '../config/api_client';

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
        <label className="block mb-2">Nome da Pizza</label>
        <input
          type="text"
          value={flavour}
          onChange={(e) => setFlavour(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <label className="block mb-2">Descrição da Pizza</label>
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
          onClick={handleEditPizza}
          extraClasses='!bg-green-600'
        >
          Atualizar Pizza
        </Button>
      </div>
    </div>
  );
}
