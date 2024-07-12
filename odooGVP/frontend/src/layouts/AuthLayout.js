import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
