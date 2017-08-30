import { h, Component } from 'preact';
import * as style from './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div id="foo">
        <Link to="/cvl">Test</Link>
      </div>
    );
  }
}

export default Home;
