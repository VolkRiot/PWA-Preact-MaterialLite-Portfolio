import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { h } from 'preact';
import Home from './containers/Home.jsx';
import CoverLetter from './containers/CoverLetter';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/cvl/:company/:title" render={() => <CoverLetter />} />
    </Switch>
  );
};

export default Main;
