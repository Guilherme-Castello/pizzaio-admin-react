import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import api_client from '../config/api_client';

export default function DeletePizza() {
  const { id } = useParams();
  const [flavour, setFlavour] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      const response = await api_client.get(`pizzas/${id}`);
      const { flavour } = response.data.pizza;
      setFlavour(flavour);
    }
    fetchPizza();
  }, [id]);

  async function handleDeletePizza() {
    await api_client.delete(`pizzas/${id}`)
      .then(response => console.log(response));
    navigate('/');
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Deletar Pizza</h1>
      <div className="bg-yellow-400/50 p-4 rounded-lg mb-4 justify-center items-center flex flex-col gap-5">
        <p>Tem certeza que deseja deletar "{flavour}"</p>
        <div className='gap-2 flex'>
            <Button
            onClick={handleDeletePizza}
            >
            Deletar Pizza
            </Button>
            <Button
            extraClasses='!bg-blue-600'
            onClick={() => navigate('/')}
            >
            Cancelar
            </Button>
        </div>
      </div>
    </div>
  );
}
