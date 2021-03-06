/*eslint-disable import/default */
import 'babel-polyfill'; // features babel can't transpile. -- best to choose just what is needed instead of the entire package
import React from 'react';
import { render } from 'react-dom'; // render function for the browser
import { Router, browserHistory } from 'react-router'; // removes the need for # based urls
import { Provider } from 'react-redux';
import routes from './routes';
import * as actions from './actions/authActions';

//actions:

// Have Webpack import CSS files too:
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import configureStore from './store/configureStore';


const store = configureStore();
store.dispatch(actions.checkLoggedIn());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);