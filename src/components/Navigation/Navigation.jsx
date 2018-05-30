import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

const Navigation = () => (
  <nav styleName="navigation">
    <ul styleName="navigation__list">
      <li>
        <NavLink
          styleName="navigation__link"
          exact
          to="/"
          activeClassName={styles.active}
        >
          Character
        </NavLink>
      </li>
      <li>
        <NavLink
          styleName="navigation__link"
          to="/locations"
          activeClassName={styles.active}
        >
          Locations
        </NavLink>
      </li>
      <li>
        <NavLink
          styleName="navigation__link"
          to="/episodes"
          activeClassName={styles.active}
        >
          Episodes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
