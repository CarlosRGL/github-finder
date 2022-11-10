import React from 'react';
import Hero from '../components/Hero';

function Layout({ children }) {
  return (
    <div>
      <Hero />
      {children}
    </div>
  );
}

export default Layout;
