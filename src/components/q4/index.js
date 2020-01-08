import React, { useContext } from 'react';
import { css } from '@emotion/core';
import { ThemeContext } from '../../layouts';
import { FaCheck } from 'react-icons/fa';

const Nobr = ({ children }) => {
  return <span style={{ whiteSpace: 'nowrap' }}>{children}</span>;
};

export default () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h2
        css={css`
          font-size: ${theme.font.size.m};

          &::before {
            content: '(Question 4) ';
            font-size: 12px;
            vertical-align: text-top;
            position: absolute;
            font-weight: bolder;
            transform: translateX(-100%) rotateZ(-35deg);
          }
        `}
      >
        Tell us about a platform you believe has solved a complex problem really
        well, and why. Would you change anything in their approach?
      </h2>
      <div
        css={css`
          margin-top: 25px;
          font-size: ${theme.font.size.xs};
          margin-left: 0;
          list-style: none;

          > * {
            margin-bottom: 5px;
          }

          > li {
            display: grid;
            grid-template-columns: 25px 1fr;
          }
        `}
      >
        <p>
          Recently I have been exploring the{' '}
          <a href="https://www.gatsbyjs.org/">
            <strong>Gatsby</strong>
          </a>{' '}
          framework. I think they have solved most of the problems that we face
          as web developers. From setting up the dev environment and tooling to
          image optimization and site performance, Gatsby took these things on
          its shoulders and let us focus solely on building the website. They
          have maximized the number of decisions we <em>don't</em> have to make
          when starting a new website. The best of web-stack like Webpack,
          React, and GraphQL comes out-of-the-box by default.
        </p>

        <p>
          About changing anything in their approach, I would also add some
          default standards for the dynamic parts of a website since Gatsby
          currently does most of the heavy-lifting on the static part.
        </p>
      </div>
      <style jsx>
        {`
          a {
            text-decoration: none;
          }
          strong {
            position: relative;
            color: ${theme.text.color.attention};
            font-weight: bold;

            &::after,
            &::before {
              content: '›';
              color: ${theme.text.color.attention};
              margin: 0 1 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: '‹';
              margin: 0 0 0 1;
            }
          }

          q {
            font-style: italic;
            color: ${theme.text.color.attention};
            font-weight: bold;
          }

          em {
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

const StyleFaCheck = () => {
  return (
    <FaCheck
      css={css`
        color: #efa42d;
        margin-right: 10px;
        display: inline-block;
      `}
    />
  );
};
