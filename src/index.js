import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from 'reducers';
import { App } from 'containers';
import './global-styles.css';

// Implement Redux Devtools extension for the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create the Redux store with the Redux Thunk middleware
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Function for rendering the React app
const render = Component => {
  ReactDOM.render(
    // Use the Appcontainer component so Hot Module Replacement works with React Redux
    <AppContainer>
      {/* Provider makes the Redux store available to the conatiner components with the connect() calls */}
      <Provider store={store}>
        {/* A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.*/}
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('main')
  );
};

// Call the render function ones when there is no Hot Module Replacement on
// Pass the App component as the top tier component to the render function
render(App);

// Enable Hot Module Replacement with react-hot-loader,
// this will make sure the state is maintained when reloading
if (module.hot) module.hot.accept('containers', () => render(App));
