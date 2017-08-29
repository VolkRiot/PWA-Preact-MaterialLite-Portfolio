import { h, Component } from 'preact';
import * as style from './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="foo">
        <a href="/letter">Testing</a>
      </div>
    );
  }
}

export default Home;
