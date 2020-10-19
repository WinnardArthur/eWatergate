import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import FeedPage from './FeedPage/feedpage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/feedpage" component={FeedPage} />
      </Switch>
    </div>
  );
}

export default App;
