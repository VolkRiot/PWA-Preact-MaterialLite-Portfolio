import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { h, render } from 'preact';
import Home from './containers/Home.jsx';
import CoverLetter from './containers/CoverLetter';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/letter" render={() => <CoverLetter />} />
    </Switch>
  );
};

export default Main;
