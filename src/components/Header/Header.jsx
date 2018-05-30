import React from 'react';
import { Navigation } from 'components';
import './Header.css';

const Header = () => (
  <div styleName="header">
    {/* <h1 styleName="header__title">Rick and Morty</h1> */}
    <Navigation />
  </div>
);

export default Header;
