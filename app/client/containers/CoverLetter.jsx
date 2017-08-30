import { h, Component } from 'preact';

class CoverLetter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('This is', this.context.router.route.match);
    return <h1>This will be my cover letter thingy</h1>;
  }
}

export default CoverLetter;
