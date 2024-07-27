import React from 'react';
import logo from './logo.svg';

const Header = () => {
  return(
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h1>Welcome to My Website</h1>
      <p>This is the header section.</p>
    </header>
  );
}

export default Header;