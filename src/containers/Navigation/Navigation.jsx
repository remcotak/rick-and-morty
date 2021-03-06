import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import styles from './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav styleName="navigation">
        <ul styleName="navigation__list">
          <li>
            <NavLink
              styleName="navigation__link"
              exact
              to="/"
              activeClassName={styles.active}
            >
              Characters ({this.props.charactersCount || '0'})
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
  }
}

export default withRouter(
  connect(
    state => ({
      charactersCount: state.characters.info.count
    }),
    {}
  )(Navigation)
);
