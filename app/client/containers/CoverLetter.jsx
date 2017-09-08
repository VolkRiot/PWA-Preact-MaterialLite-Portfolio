import { h, Component } from 'preact';
import CoverLetterBody from '../components/CoverLetterText';
import * as style from './CoverLetter.style.css';

class CoverLetter extends Component {
  constructor(props) {
    super(props);
    this.params;
    this.default = { company: 'Company Name' };
    this.date = new Date().toUTCString().split(' ');
  }

  render() {
    this.params = this.context.router.route.match.params.company
      ? this.context.router.route.match.params
      : this.default;

    // To UpperCase the entire params object
    this.params = Object.keys(this.params).reduce((acc, each) => {
      acc[each] = this.params[each]
        .split('+')
        .map(each => {
          return each.charAt(0).toUpperCase() + each.slice(1);
        })
        .join(' ');

      return acc;
    }, {});

    return (
      <div class="cover-letter-body-wrapper">
        <div class="background-plate" />
        <div className="mdl-grid cover-letter-main">
          <div className="mdl-layout-spacer" />
          <CoverLetterBody date={this.date} params={this.params} />
          <div className="mdl-layout-spacer" />
        </div>
      </div>
    );
  }
}

export default CoverLetter;
