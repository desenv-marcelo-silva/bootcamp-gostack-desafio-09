import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import Deliveries from '../Pages/Deliveries';
import DeliveryMan from '../Pages/DeliveryMan';
import Recipients from '../Pages/Recipients';
import Problems from '../Pages/DeliveriesProblems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/deliverymans" component={DeliveryMan} isPrivate />
    </Switch>
  );
}
