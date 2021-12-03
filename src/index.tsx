import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import { store,persistor } from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

