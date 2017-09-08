import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { h } from 'preact';

import Layout from './components/Layout';
import Home from './containers/Home.jsx';
import CoverLetter from './containers/CoverLetter';
import About from './containers/About';

const Router = props => {
  const HoRouter = View => (
    <Layout>
      <View />
    </Layout>
  );

  return (
    <Switch>
      <Route exact path="/" render={() => HoRouter(Home)} />
      <Route path="/about" render={() => HoRouter(About)} />
      <Route path="/cvl/:company/:title" render={() => <CoverLetter />} />
    </Switch>
  );
};

export default Router;
