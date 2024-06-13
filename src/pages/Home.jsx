import PizzaContainer from "../components/PizzaContainer";
import api_client from '../config/api_client';
import { useEffect, useState } from 'react';
export default function Home() {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    api_client.get('pizzas').then(response => setPizzas(response.data.pizzas))
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-10">
      <h1 className="text-2xl font-bold mb-4">Pizzas Cadastradas</h1>
      {pizzas && pizzas.map((pizza, index) => {
        return(
          <PizzaContainer key={index} pizza={pizza}/>
        )
      })}
    </main>
  );
}
