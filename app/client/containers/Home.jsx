import { h, render, Component } from 'preact';

class Home extends Component {
  render() {
    return (
      <div id="foo">
        <span>Hello, world!</span>
        <button onClick={e => alert('hi!')}>Click Me</button>
      </div>
    );
  }
}

export default Home;
