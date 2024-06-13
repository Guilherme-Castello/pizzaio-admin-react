import React from 'react'
import Button from "./Button";
import pizza_example from '../images/pizza_exemple.jpg'
import { useNavigate } from 'react-router-dom';

export default function PizzaContainer({ pizza }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-yellow-400/50 w-full h-20 px-5 flex justify-between"
    >
      <div className="w-[20%] justify-center pt-[5px]">
        <img src={pizza_example} alt="pizza_example" width={105} height={105} className="rounded-md" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="w-full flex justify-around gap-2 items-center">
          <p className="text-xl">{pizza.flavour}</p>
          <p className="text-green-600">R$ {(pizza.price_in_cents / 100).toFixed(2)}</p>
        </div>
        <div className="w-full flex px-5 items-center justify-center gap-4">
          <p className="text-red-500">{pizza.description}</p>
        </div>
      </div>
      <div className="w-[20%] justify-center items-center flex gap-4">
        <Button extraClasses="!bg-blue-700" onClick={() => navigate(`editpizza/${pizza.id}`)}>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  )
}