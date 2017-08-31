import { h, Component } from 'preact';
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
      <div class="mdl-grid">
        <div class="mdl-layout-spacer" />
        <div
          id="cover-letter-main"
          class="mdl-cell mdl-cell--8-col mdl-cell--middle mdl-shadow--4dp"
        >
          <div class="c6">
            <p class="c3">
              <span class="c0">
                {this.date.slice(0, this.date.length - 2).join(' ')}
                <br />
                <br />
              </span>
              <span class="c0 c8">{this.params.company}</span>
              <span class="c0 c8">
                <br />
              </span>
              <span class="c0">
                <br />Dear Hiring Manager,<br />
                <br />This letter is to express my interest in your posting for
                a {this.params.title}
              </span>
              <span class="c0 c8">
                &nbsp;position with {this.params.company}
              </span>
              <span class="c2 c0">
                . With my hands-on experience efficiently coding websites and
                applications using modern Full-Stack tools such as Javascript,
                Node, HTML/CSS, Python, React, Express and more. I am confident
                I will be an excellent addition to your organization.<br />
              </span>
              <br />
            </p>
            <p class="c3">
              <span class="c0">
                I am originally a self-taught programmer who started my coding
                career by cutting my teeth on C++ before moving on to working as
                an apprentice writing a Python Selenium Webdriver testing
                framework, along with Javascript and some Java, for a startup in
                SF. Afterwards, I moved my focus to a Full-Stack
                Javascript/React Stack in order to develop the skill-set needed
                for modern web applications infrastructures. I{' '}
              </span>
              <span class="c0">recently</span>
              <span class="c0">&nbsp;</span>
              <span class="c0">completed</span>
              <span class="c0">
                &nbsp;a half-year training program from UC Berkeley focused on
                full stack web-development across the React Stack. You can check
                out my Javascript web development tools and numerous projects on
                my GitHub:{' '}
              </span>
              <span class="c4 c0">
                <a
                  class="c1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/VolkRiot"
                >
                  https://github.com/VolkRiot
                </a>
              </span>
              <span class="c0">
                .<br />
                <br />From a more technical perspective, my previous software
                engineering job involved a code base written primarily in Java,
                using the Play framework. My role specifically was as the sole
                QA engineer. In that effort I was able to not only implement a
                variety of Python based Selenium tests to secure our
                user-experience, but also improved the overall function of the
                test runner to provide automated diagnostics reports when things
                failed and implemented code coverage reporting. I also fixed a
                number of critical bugs all while rapidly closing the gap
                between my self-taught background and professional coding
                standard.{' '}
              </span>
            </p>
            <p class="c3 c7">
              <span class="c2 c0" />
            </p>
            <p class="c3">
              <span class="c0 c2">
                As per my work in the Javascript React stack. I have build a
                number of MVC full-stack apps which you can review on my GitHub.
                I have been the primary most of the major development efforts,
                leading teams of 2-4 engineers in the execution of complex
                builds with limited time.{' '}
              </span>
            </p>
            <p class="c3 c7">
              <span class="c2 c0" />
            </p>
            <p class="c3">
              <span class="c0">
                One of my major interests is specifically in how the individual
                design and system choices affect the overall performance for the
                front-end. I firmly believe that a beautiful and performative
                front-end makes the difference in how the end user perceives the
                value of a piece of software or web app. I always aim to make
                the implemented features performative without compromising the
                dynamic web that users have come to expect.
              </span>
            </p>
            <p class="c3">
              <span class="c0">
                <br />Please let me know if I can answer any further questions
                regarding my knowledge of relevant systems.<br />
                <br />Thank you for your time and consideration. I look forward
                to speaking with you further.<br />
              </span>
              <span class="c2 c5">
                <br />
                <br />Best Regards,<br />Mikhail Metrikin
              </span>
            </p>
            <p class="c3">
              <span>
                (510) 925-5353<br />
              </span>
              <span class="c4">
                <a
                  class="c1"
                  href="https://github.com/VolkRiot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/VolkRiot
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="mdl-layout-spacer" />
      </div>
    );
  }
}

export default CoverLetter;
