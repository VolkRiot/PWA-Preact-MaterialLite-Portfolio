import { h, Component } from 'preact';
import * as style from './Home.css';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

class Home extends Component {
  render() {
    return (
      <div className="main-container-body">
        <div>This is the home page</div>
      </div>
    );
  }
}

export default Home;
