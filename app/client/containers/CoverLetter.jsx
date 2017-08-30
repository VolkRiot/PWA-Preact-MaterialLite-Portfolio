import { h, Component } from 'preact';
import * as style from './CoverLetter.style.css';

class CoverLetter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('This is', this.context.router.route.match.params);
    return (
      <div class="mdl-grid">
        <div class="mdl-layout-spacer" />
        <div
          id="cover-letter-main"
          class="mdl-cell mdl-cell--10-col mdl-cell--middle mdl-shadow--2dp"
        >
          Testing
        </div>
        <div class="mdl-layout-spacer" />
      </div>
    );
  }
}

export default CoverLetter;
