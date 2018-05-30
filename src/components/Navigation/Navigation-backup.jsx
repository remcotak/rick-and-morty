import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  isRouteActive = path => {
    return `${this.props.location.pathname === path ? 'active' : ''}`;
  };

  navigateTo = (path, e) => {
    console.log(e);
  };

  render() {
    return (
      <nav styleName="navigation">
        <ul styleName="navigation__list">
          <li>
            <a
              styleName={`navigation__link ${this.isRouteActive('/')}`}
              href="/"
              onClick={e => this.navigateTo('/', e)}
            >
              Characters
            </a>
          </li>
          <li>
            <a
              styleName={`navigation__link ${this.isRouteActive('/locations')}`}
              href="/locations"
              onClick={() => this.navigateTo('/locations')}
            >
              Locations
            </a>
          </li>
          <li>
            <a
              styleName={`navigation__link ${this.isRouteActive('/episodes')}`}
              href="/episodes"
              onClick={() => this.navigateTo('/episodes')}
            >
              Episodes
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navigation);
