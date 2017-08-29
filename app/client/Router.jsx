import { Router } from 'preact-router';
import { h, render } from 'preact';
import Home from './containers/Home.jsx';
import CoverLetter from './containers/CoverLetter';

const Main = () => {
  return (
    <Router>
      <Home path="/" />
      <CoverLetter path="/test" />
    </Router>
  );
};

export default Main;
