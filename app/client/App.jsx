import { h, render } from 'preact';
import { AppContainer } from 'react-hot-loader';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('app');

const wrapApp = AppContainer => (
  <BrowserRouter>
    <AppContainer>
      <AppContainer />
    </AppContainer>
  </BrowserRouter>
);

render(wrapApp(Router), root);

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextApp = require('./Router').default;
    render(wrapApp(NextApp), root);
  });
}
