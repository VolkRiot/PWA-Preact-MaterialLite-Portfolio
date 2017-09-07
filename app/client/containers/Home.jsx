import { h, Component } from 'preact';
import * as style from './Home.css';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

class Home extends Component {
  render() {
    return (
      <div id="foo">
        <NavBar />
      </div>
    );
  }
}

export default Home;
