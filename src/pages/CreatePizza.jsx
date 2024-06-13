// src/components/PizzaCreator.js
import React, { useState } from 'react';
import Button from '../components/Button';
export default function CreatePizza() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState('');

  const handleAddPizza = () => {
    
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Criação de Pizzas</h1>
      <div className="bg-yellow-200 p-4 rounded-lg mb-4">
        <label className="block mb-2">Nome da Pizza</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <label className="block mb-2">Ingredientes (separados por vírgula)</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <label className="block mb-2">Preço</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
