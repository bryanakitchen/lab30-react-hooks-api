import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCharacters from '../../container/AllCharacters';
import Detail from '../../container/detail/Detail';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path="/" component={AllCharacters} />

        <Route exact path="/character/:id" component={Detail} />
      </Switch>


    </Router>
  );
}
