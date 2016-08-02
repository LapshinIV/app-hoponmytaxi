import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import './main.html';

import route from '../../../imports/ui/Rout.jsx';
import login from '../../../imports/ui/AccountsUIWrapper.jsx';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path='/'    component={route} />
      <Route path='/login' component={login} />
    </Router>, document.getElementById('render-target'));

  // loading Google Maps API
  GoogleMaps.load({
    key: 'AIzaSyAMUsNldKIjKx7FDU_NwrGYi9BXwxN-DLY',
    libraries: 'places'  // also accepts an array if you need more than one
  });

  Tracker.autorun(() => {
    if (Geolocation.latLng()) {
      console.log('currentLocation', Geolocation.latLng());
    }
  });
});
