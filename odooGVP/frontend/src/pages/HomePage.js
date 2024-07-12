import React from 'react';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="text-center p-10">
        <h2 className="text-4xl font-bold mb-4 animate-bounce-slow">Home Page</h2>
        <p className="text-lg">Welcome to the home page!</p>
      </div>
    </MainLayout>
  );
};

export default HomePage;
