import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import api_client from "../config/api_client";
import PizzaioBlock from "../components/PizzaioBlock";

export default function DeletePizza() {
  const { id } = useParams();
  const [flavour, setFlavour] = useState("");
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
    await api_client
      .delete(`pizzas/${id}`)
      .then((response) => console.log(response));
    navigate("/");
  }

  return (
    <PizzaioBlock name='Deletar Pizza'>
      <div className="flex flex-col items-center gap-7">
        <p>Tem certeza que deseja deletar "{flavour}"</p>
        <div className="gap-2 flex">
          <Button onClick={handleDeletePizza}>Deletar</Button>
          <Button extraClasses="!bg-blue-600" onClick={() => navigate("/")}>
            Cancelar
          </Button>
        </div>
      </div>
    </PizzaioBlock>
  );
}
