import React from 'react';
import { Navigation } from 'components';
import './Header.css';

const Header = props => (
  <div styleName="header">
    {/* <h1 styleName="header__title">Rick and Morty</h1> */}
    <Navigation charactersCount={props.charactersCount} />
  </div>
);

export default Header;
