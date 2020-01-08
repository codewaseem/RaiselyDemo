import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const Hero = props => {
  const { backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
          This deck is dedicated to{' '}
          <strong>
            <a
              href="https://raisely.com/"
              style={{
                color: '#EFA42D',
              }}
            >
              Raisely.com
            </a>
          </strong>{' '}
          to answer the questions asked in their job post.
        </h1>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: 20px;
          padding-top: ${theme.header.height.homepage};
          position: absolute;
          top: 0;
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 'Open Sans';

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: '›';
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: '‹';
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query IndexBGQuery {
        bgDesktop: imageSharp(
          fluid: { originalName: { regex: "/hero-background/" } }
        ) {
          resize(width: 1200, quality: 90, cropFocus: CENTER) {
            src
          }
        }
        bgTablet: imageSharp(
          fluid: { originalName: { regex: "/hero-background/" } }
        ) {
          resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
            src
          }
        }
        bgMobile: imageSharp(
          fluid: { originalName: { regex: "/hero-background/" } }
        ) {
          resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
            src
          }
        }
      }
    `}
    render={data => {
      const {
        bgDesktop: {
          resize: { src: desktop },
        },
        bgTablet: {
          resize: { src: tablet },
        },
        bgMobile: {
          resize: { src: mobile },
        },
      } = data;

      const backgrounds = {
        desktop,
        tablet,
        mobile,
      };
      return <Hero backgrounds={backgrounds} {...props} />;
    }}
  />
);
