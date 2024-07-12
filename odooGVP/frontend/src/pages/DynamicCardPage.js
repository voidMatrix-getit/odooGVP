import React from 'react';
import MainLayout from '../layouts/MainLayout';

const DynamicCardPage = () => {
  const cards = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' }
  ];

  return (
    <MainLayout>
      <div className="text-center p-10">
        <h2 className="text-4xl font-bold mb-4">Dynamic Card Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default DynamicCardPage;
