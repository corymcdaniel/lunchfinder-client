import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LocationPage from './components/location/LocationPage';
import AboutPage from './components/about/AboutPage';

// Forces / to load App with the main child as Homepage.
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="locations/:id" component={LocationPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);