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
      <p>Pizza List</p>
      {pizzas && pizzas.map((pizza, index) => {
        return(
          <PizzaContainer key={index} pizza={pizza}/>
        )
      })}
    </main>
  );
}
