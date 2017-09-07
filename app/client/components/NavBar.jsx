import { h, Component } from 'preact';
import * as style from './Header.style.css';
import * as style2 from './foreignCSS.style.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.navLinks = {
      Portfolio: { href: '/' },
      Blog: { href: '/' },
      About: { href: '/' },
      Contact: { href: '/' }
    };
  }

  render() {
    return (
      <div class="mdl-layout mdl-js-layout">
        <header class="mdl-layout__header mdl-layout__header--waterfall">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Title</span>
            <div class="mdl-layout-spacer" />
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
              <label
                class="mdl-button mdl-js-button mdl-button--icon"
                for="waterfall-exp"
              >
                <i class="material-icons">search</i>
              </label>
              <div class="mdl-textfield__expandable-holder">
                <input
                  class="mdl-textfield__input"
                  type="text"
                  name="sample"
                  id="waterfall-exp"
                />
              </div>
            </div>
          </div>
          <div class="mdl-layout__header-row">
            <div class="mdl-layout-spacer" />
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="">
                Link
              </a>
              <a class="mdl-navigation__link" href="">
                Link
              </a>
              <a class="mdl-navigation__link" href="">
                Link
              </a>
              <a class="mdl-navigation__link" href="">
                Link
              </a>
            </nav>
          </div>
        </header>

        {/* <header class="mdl-layout__header mdl-layout__header--waterfall mdl-layout__header portfolio-header">
          <div class="mdl-layout__header-row portfolio-logo-row">
            <span class="mdl-layout__title">
              <span class="mdl-layout__title">Something should go here</span>
            </span>
          </div>
          <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
              {Object.keys(this.navLinks).map((each, i) => {
                return (
                  <a
                    class="mdl-navigation__link is-active"
                    key={i}
                    href={this.navLinks[each].href}
                  >
                    {each.charAt(0).toUpperCase() + String(each).slice(1)}
                  </a>
                );
              })}
            </nav>
          </div>
        </header> */}
        {/* <div class="mdl-layout__drawer mdl-layout--small-screen-only">
          <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
            <a class="mdl-navigation__link is-active" href="/">
              Portfolio
            </a>
            <a class="mdl-navigation__link" href="/">
              Blog
            </a>
            <a class="mdl-navigation__link" href="/">
              About
            </a>
            <a class="mdl-navigation__link" href="/">
              Contact
            </a>
          </nav>
        </div> */}
      </div>
    );
  }
}

export default NavBar;
