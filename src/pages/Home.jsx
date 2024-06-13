import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PizzaContainer from "../components/PizzaContainer";
import api_client from '../config/api_client';
import { useEffect, useState } from 'react';
export default function Home() {
  const navigate = useNavigate();

  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    api_client.get('pizzas').then(response => setPizzas(response.data.pizzas))
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-10">
      <span className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-bold">Pizzas Cadastradas</h1>
        <Button extraClasses='!bg-green-600 justify-end' onClick={() => navigate('/createpizza')}>Adicionar Pizza</Button>
      </span>
      {pizzas.length > 0 ? pizzas.map((pizza, index) => {
        return(
          <PizzaContainer key={index} pizza={pizza}/>
        )
      }) : 
      <div className="pt-10 items-center flex justify-center">
        <p>Não há pizzas cadastradas</p>
      </div>}
    </main>
  );
}
