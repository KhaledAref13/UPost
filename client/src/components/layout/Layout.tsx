import React from 'react';
import { Navbar, Footer } from '../common';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <div key={location.pathname}>
      <Navbar />
      <div className="min-h-[calc(100vh-160px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
