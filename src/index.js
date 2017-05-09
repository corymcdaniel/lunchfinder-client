/*eslint-disable import/default */
import 'babel-polyfill'; // features babel can't transpile. -- best to choose just what is needed instead of the entire package
import React from 'react';
import { render } from 'react-dom'; // render function for the browser
import { Router, browserHistory } from 'react-router'; // removes the need for # based urls
import { Provider } from 'react-redux';
import routes from './routes';

//actions:
import { loadLocations } from './actions/locationActions';

// Have Webpack import CSS files too:
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import configureStore from './store/configureStore';


const store = configureStore();
// initial load without server-rendering:
store.dispatch(loadLocations());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);