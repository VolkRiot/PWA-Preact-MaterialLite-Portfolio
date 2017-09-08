import { h, Component } from 'preact';
import * as style from './Home.css';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

class Home extends Component {
  render() {
    return (
      <div class="mdl-layout mdl-js-layout">
        <NavBar />
        <main class="mdl-layout__content">
          <div class="page-content" />
        </main>
      </div>
    );
  }
}

export default Home;
