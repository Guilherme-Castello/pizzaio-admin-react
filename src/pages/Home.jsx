import pizza_example from '../images/pizza_exemple.jpg'
import PizzaContainer from "../components/PizzaContainer";
import api_client from '../config/api_client';
import { useEffect, useState } from 'react';
export default function Home() {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    api_client.get('pizzas').then(response => setPizzas(response.data.pizzas))
  }, [])
  console.log(pizzas)
  const pizzaListMock = [
    {
      id: 0,
      name: 'Calabreza',
      price_in_cents: 1900,
      ingredients: ['calabreza', 'cebola'],
      img: pizza_example
    },
    {
      id: 1,
      name: 'Margarita',
      price_in_cents: 1800,
      ingredients: ['molho de tomate', 'queijo', 'manjericão'],
      img: pizza_example
    },
    {
      id: 2,
      name: 'Quatro Queijos',
      price_in_cents: 2000,
      ingredients: ['queijo mussarela', 'queijo parmesão', 'queijo gorgonzola', 'queijo provolone'],
      img: pizza_example
    },
    {
      id: 3,
      name: 'Frango com Catupiry',
      price_in_cents: 2100,
      ingredients: ['frango desfiado', 'catupiry'],
      img: pizza_example
    },
    {
      id: 4,
      name: 'Portuguesa',
      price_in_cents: 2000,
      ingredients: ['presunto', 'queijo', 'ovo', 'cebola', 'azeitona', 'pimentão'],
      img: pizza_example
    },
    {
      id: 5,
      name: 'Pepperoni',
      price_in_cents: 1900,
      ingredients: ['pepperoni', 'queijo'],
      img: pizza_example
    },
    {
      id: 6,
      name: 'Vegetariana',
      price_in_cents: 2000,
      ingredients: ['pimentão', 'cebola', 'tomate', 'azeitona', 'milho', 'brocolis'],
      img: pizza_example
    },
    {
      id: 7,
      name: 'Marguerita',
      price_in_cents: 1800,
      ingredients: ['molho de tomate', 'queijo', 'manjericão'],
      img: pizza_example
    },
    {
      id: 8,
      name: 'Bacon com Catupiry',
      price_in_cents: 2100,
      ingredients: ['bacon', 'catupiry'],
      img: pizza_example
    },
    {
      id: 9,
      name: 'Calabresa com Bacon',
      price_in_cents: 2200,
      ingredients: ['calabreza', 'bacon', 'cebola'],
      img: pizza_example
    }
  ];
  
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-10">
      <p>Pizza List</p>
      {pizzas && pizzas.map((pizza, index) => {
        return(
          <PizzaContainer key={index} pizza={pizza}/>
        )
      })}
    </main>
  );
}
