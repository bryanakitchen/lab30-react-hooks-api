import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllCharacters from '../../container/AllCharacters';
import Detail from '../detail/Detail';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>

      <Route path="/" component={Header} />

      <Route exact path="/" component={AllCharacters} />

      <Route exact path="/:character" component={Detail} />

    </Router>
  );
}
