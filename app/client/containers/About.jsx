import { h, Component } from 'preact';
import NavBar from '../components/NavBar';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about-page">
        <NavBar />
        <main class="mdl-layout__content">
          <div class="page-content" />
        </main>
      </div>
    );
  }
}

export default About;
