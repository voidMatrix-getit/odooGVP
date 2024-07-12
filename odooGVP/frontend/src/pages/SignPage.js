import React from 'react';
import AuthLayout from '../layouts/AuthLayout';

const SignupPage = () => {
  return (
    <AuthLayout>
      <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6">Signup Page</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-gradientStart to-gradientEnd text-white p-2 rounded mt-4">Signup</button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
