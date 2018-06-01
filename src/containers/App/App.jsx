import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Characters, CharacterDetail, Locations } from 'containers';
import { Header, Footer } from 'components';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div styleName="wrapper">
        <Switch>
          {/* Routes that math the exact '/' path, route to Characters */}
          <Route exact path="/" component={Characters} />
          <Route path="/locations" component={Locations} />
          {/* Route to the detail page with a id parameter */}
          <Route path="/character/:id" component={CharacterDetail} />
          {/* If no routes match, redirect to Characters */}
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
