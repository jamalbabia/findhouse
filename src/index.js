import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension'
import { legacy_createStore as createStore } from 'redux';
import reducer from './redux/reducer';

const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<Auth0Provider
    domain="dev-8uyp1hags2o3t5if.us.auth0.com"
    clientId="VutahjqaJZNZ3JOz04EIZoaGgIctS5bA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
  </Auth0Provider>,
    </Provider>
);
