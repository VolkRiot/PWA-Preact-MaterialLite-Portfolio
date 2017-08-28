import { h, render } from 'preact';
import { AppContainer } from 'react-hot-loader';
import Home from './containers/Home';

const root = document.getElementById('app');

const wrapApp = AppContainer => (
    <AppContainer>
      <AppContainer/>
    </AppContainer>
);

render(
  wrapApp(Home),
    root
);

if (module.hot) {
  module.hot.accept('./containers/Home', () => {
    const NextApp = require('./containers/Home').default;
    render(wrapApp(NextApp), root)
  })
}
