import { h, render } from 'preact';
import { AppContainer } from 'react-hot-loader';
import Main from './Router';

const root = document.getElementById('app');

const wrapApp = AppContainer => (
    <AppContainer>
      <AppContainer/>
    </AppContainer>
);

render(
  wrapApp(Main),
    root
);

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextApp = require('./Router').default;
    render(wrapApp(NextApp), root)
  })
}
