import React from 'react';

export default function PizzaioBlock({children, name}) {

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <div className="bg-yellow-400/50 p-4 rounded-lg mb-4">
        {children}
      </div>
    </div>
  );
}
