import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import merge from 'lodash.merge'
import throttle from 'lodash.throttle';
import { loadState, saveState } from "./utils/local_storage";

document.addEventListener('DOMContentLoaded', () => {
  let initState = {};
  let store;

  let localStorageState = loadState();
  if (!localStorageState) localStorageState = {};

  if (window.currentUser) {
    initState = {
      entities: {
        currentUser: window.currentUser
      },
      session: {
        currentUserId: window.currentUser.id
      }
    };

    let mergedState = merge(initState, localStorageState)

    store = configureStore(mergedState);

    delete window.currentUser;
  } else {
    store = configureStore(localStorageState);
  }
  store.subscribe(throttle(() => {
    saveState({
      entities: {
        cartItems: store.getState().entities.cartItems,
      }
    });
  }, 1000));

  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});