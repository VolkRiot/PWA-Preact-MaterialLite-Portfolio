import { h, Component } from 'preact';
import * as style from './About.style.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mdl-grid about-container">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">About</h2>
          </div>
          <div className="mdl-card__media">
            <img className="article-image" src="" border="0" alt="" />
          </div>

          <div className="mdl-grid portfolio-copy">
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">
              Introduction
            </h3>
            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
              <p>
                Excepteur reprehenderit sint exercitation ipsum consequat qui
                sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate
                voluptate irure occaecat deserunt incididunt esse in. Sunt velit
                aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum
                do. Duis veniam reprehenderit laborum occaecat id proident nulla
                veniam. Duis enim deserunt voluptate aute veniam sint pariatur
                exercitation. Irure mollit est sit labore est deserunt pariatur
                duis aute laboris cupidatat. Consectetur consequat esse est sit
                veniam adipisicing ipsum enim irure.
              </p>
            </div>

            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">
              Irure mollit est sit labore
            </h3>

            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
              <p>
                Excepteur reprehenderit sint exercitation ipsum consequat qui
                sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate
                voluptate irure occaecat deserunt incididunt esse in. Sunt velit
                aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum
                do. Duis veniam reprehenderit laborum occaecat id proident nulla
                veniam. Duis enim deserunt voluptate aute veniam sint pariatur
                exercitation. Irure mollit est sit labore est deserunt pariatur
                duis aute laboris cupidatat. Consectetur consequat esse est sit
                veniam adipisicing ipsum enim irure end.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
