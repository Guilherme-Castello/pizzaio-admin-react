import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api_client from '../config/api_client';
import Input from '../components/Input';
import PizzaioBlock from '../components/PizzaioBlock';

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
    <PizzaioBlock name='Editar Pizza'>
        <Input value={flavour} setValue={setFlavour} label='Nome da pizza'/>
        <Input value={description} setValue={setDescription} label='Nome da pizza'/>
        <Input value={priceInCents} setValue={setPriceInCents} label='Nome da pizza'/>
        <Button
          onClick={handleEditPizza}
          extraClasses='!bg-green-600'
        >
          Atualizar Pizza
        </Button>
    </PizzaioBlock>
  );
}
