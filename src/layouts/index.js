import 'typeface-open-sans';
import FontFaceObserver from 'fontfaceobserver';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Swipeable from 'react-swipeable';
import Transition from '../components/transition';
import './index.css';
import { getScreenWidth, timeoutThrottlerHandler } from '../utils/helpers';
import themeObjectFromYaml from '../theme/theme.yaml';
import Header from '../components/Header';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export const ScreenWidthContext = React.createContext(0);
export const ThemeContext = React.createContext(null);
export const FontLoadedContext = React.createContext(false);

class TemplateWrapper extends Component {
  state = {
    font400loaded: false,
    font600loaded: false,
    screenWidth: 0,
    headerMinimized: false,
    theme: themeObjectFromYaml,
  };

  NEXT = [13, 32, 39];
  PREV = 37;

  constructor() {
    super();
    if (typeof window !== `undefined`) {
      this.loadFont('font400', 'Open Sans', 400);
      this.loadFont('font600', 'Open Sans', 600);
    }
  }

  loadFont = (name, family, weight) => {
    const font = new FontFaceObserver(family, {
      weight: weight,
    });

    font.load(null, 10000).then(
      () => {
        console.log(`${name} is available`);
        this.setState({ [`${name}loaded`]: true });
      },
      () => {
        console.log(`${name} is not available`);
      }
    );
  };

  swipeLeft = () => {
    this.navigate({ keyCode: this.NEXT[0] });
  };

  swipeRight = () => {
    this.navigate({ keyCode: this.PREV });
  };

  navigate = ({ keyCode }) => {
    const now = +this.props.data.mdx.frontmatter.slug;
    const slidesLength = this.props.slidesLength;
    if (now) {
      if (keyCode === this.PREV && now === 1) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1 && now === slidesLength) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        navigate(`/${now + 1}`);
      } else if (keyCode === this.PREV) {
        navigate(`/${now - 1}`);
      }
    }
  };
  timeouts = {};

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
    this.setState({ screenWidth: getScreenWidth() });
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeThrottler, false);
    }
  }
  resizeThrottler = () => {
    return timeoutThrottlerHandler(
      this.timeouts,
      'resize',
      100,
      this.resizeHandler
    );
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeThrottler, false);
    }
  }

  render() {
    const { location, children, site, data } = this.props;
    let now = 1;
    const slidesLength = this.props.slidesLength;

    if (data && data.mdx) {
      now = +data.mdx.frontmatter.slug;
    }

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ScreenWidthContext.Provider value={this.state.screenWidth}>
          <FontLoadedContext.Provider value={this.state.font400loaded}>
            <>
              <Helmet
                title={`${site.siteMetadata.title} — ${site.siteMetadata.name}`}
              />
              <Header
                name={site.siteMetadata.name}
                title={site.siteMetadata.title}
                date={site.siteMetadata.date}
                theme={this.state.theme}
              />
              <Swipeable
                onSwipedLeft={this.swipeLeft}
                onSwipedRight={this.swipeRight}
              >
                <Transition location={location}>
                  <div id="slide" style={{ width: '100%', minHeight: '100vh' }}>
                    {children}
                  </div>
                  <div className="navigation-buttons">
                    <button
                      className="left"
                      onClick={this.swipeRight}
                      aria-label="scroll"
                      disabled={now <= 1}
                    >
                      <FaArrowLeft />
                    </button>

                    <button
                      className="right"
                      onClick={this.swipeLeft}
                      aria-label="scroll"
                      disabled={now >= slidesLength}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </Transition>
              </Swipeable>
              <style jsx global>{`
                html,
                body {
                  font-family: ${this.state.font400loaded
                    ? "'Open Sans', sans-serif;"
                    : 'Arial, sans-serif;'};
                }
                strong {
                  font-weight: ${this.state.font600loaded ? 600 : 400};
                }
                h1,
                h2,
                h3 {
                  font-weight: ${this.state.font600loaded ? 600 : 400};
                  line-height: 1.1;
                  letter-spacing: -0.03em;
                  margin: 0;
                }
                h1 {
                  letter-spacing: -0.04em;
                }
                .navigation-buttons {
                  position: absolute;
                  bottom: 7%;
                  left: 50%;
                  transform: translateX(-50%);
                  z-index: 999;
                }
                button {
                  background: ${this.state.theme.background.color.brand};
                  border: 0;
                  border-radius: 50%;
                  font-size: 16px;
                  cursor: pointer;
                  width: ${this.state.theme.space.l};
                  height: ${this.state.theme.space.l};
                  animation-duration: 5s;
                  animation-iteration-count: infinite;

                  &.right {
                    animation-name: moveRight;
                  }

                  &.left {
                    animation-name: moveLeft;
                  }
                  &:disabled {
                    cursor: not-allowed;
                    background: gray;
                    animation: none;
                  }
                  &:last-child {
                    margin-left: 5px;
                  }

                  &:focus {
                    outline-style: none;
                    background: ${this.state.theme.color.brand.primary.active};
                  }

                  :global(svg) {
                    position: relative;
                    top: 5px;
                    fill: ${this.state.theme.color.neutral.white};
                    stroke-width: 40;
                    stroke: ${this.state.theme.color.neutral.white};
                  }
                }

                @keyframes moveRight {
                  0% {
                    transform: translateX(0);
                  }
                  50% {
                    transform: translateX(5px);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                @keyframes moveLeft {
                  0% {
                    transform: translateX(0);
                  }
                  50% {
                    transform: translateX(-5px);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                @from-width tablet {
                  button {
                    font-size: 24px;
                    width: ${this.state.theme.space.xl};
                    height: ${this.state.theme.space.xl};
                  }
                }

                @from-width desktop {
                  button {
                    font-size: 28px;
                  }
                }
              `}</style>
            </>
          </FontLoadedContext.Provider>
        </ScreenWidthContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};

export default props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            name
            title
            date
          }
        }
        allMdx {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => (
      <TemplateWrapper
        site={data.site}
        slidesLength={data.allMdx.edges.length}
        {...props}
      />
    )}
  />
);
