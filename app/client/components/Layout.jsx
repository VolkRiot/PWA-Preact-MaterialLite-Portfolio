import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import * as style from './Header.style.css';
import * as style2 from './foreignCSS.style.css';
import About from '../containers/About';

class Layout extends Component {
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
        <Link
          className={
            this.currentLocPath === currentPage.href ? (
              'mdl-navigation__link is-active'
            ) : (
              'mdl-navigation__link'
            )
          }
          key={i}
          to={currentPage.href}
        >
          {each.charAt(0).toUpperCase() + String(each).slice(1)}
        </Link>
      );
    });
  }

  render() {
    this.currentLocPath = this.context.router.route.location.pathname;
    return (
      <div className="outer-header-wrapper mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header
          id="top-header"
          className="mdl-layout__header mdl-layout__header--waterfall mdl-layout__header portfolio-header"
        >
          <div className="title-block title-row mdl-layout__header-row">
            <span
              id="title-text-block-inner"
              className="docs-layout-title mdl-layout-title"
            >
              <Link id="title-text-block-link" to="/">
                Misha<br />Is<br />Me
              </Link>
            </span>
          </div>
          <div className="mdl-layout__header-row portfolio-logo-row">
            <span className="mdl-layout__title">
              <span className="mdl-layout__title">
                Something should go here
              </span>
            </span>
          </div>
          <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
              {this.generateLinks()}
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer mdl-layout--small-screen-only">
          <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
            {this.generateLinks()}
          </nav>
        </div>
        <main className="mdl-layout__content">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
