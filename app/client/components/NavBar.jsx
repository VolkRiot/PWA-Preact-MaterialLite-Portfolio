import { h, Component } from 'preact';
import * as style from './Header.style.css';
import * as style2 from './foreignCSS.style.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.navLinks = {
      Portfolio: { href: '/' },
      Blog: { href: '/blog' },
      About: { href: '/about' },
      Contact: { href: '/contact' }
    };

    this.generateLinks = this.generateLinks.bind(this);
  }

  generateLinks() {
    return Object.keys(this.navLinks).map((each, i) => {
      const currentPage = this.navLinks[each];
      return (
        <a
          class={
            this.currentLocPath === currentPage.href ? (
              'mdl-navigation__link is-active'
            ) : (
              'mdl-navigation__link'
            )
          }
          key={i}
          href={currentPage.href}
        >
          {each.charAt(0).toUpperCase() + String(each).slice(1)}
        </a>
      );
    });
  }

  render() {
    this.currentLocPath = this.context.router.route.location.pathname;
    return (
      <div class="mdl-layout mdl-js-layout">
        <header
          id="top-header"
          class="mdl-layout__header mdl-layout__header--waterfall mdl-layout__header portfolio-header"
        >
          <div class="mdl-layout__header-row portfolio-logo-row">
            <span class="mdl-layout__title">
              <span class="mdl-layout__title">Something should go here</span>
            </span>
          </div>
          <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
              {this.generateLinks()}
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
          <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
            {this.generateLinks()}
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content" />
        </main>
      </div>
    );
  }
}

export default NavBar;
