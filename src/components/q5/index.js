import React, { useContext } from 'react';
import { css } from '@emotion/core';
import { ThemeContext } from '../../layouts';
import { FaAngleRight } from 'react-icons/fa';

export default () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h2
        css={css`
          font-size: ${theme.font.size.m};
        `}
      >
        That's All Folks!
      </h2>
      <div
        css={css`
          margin-top: 25px;
          font-size: ${theme.font.size.s};
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
        <p>This webpage was built using the following gatsby starters.</p>
        <ul
          css={css`
            margin-top: 25px;
            margin-bottom: 25px;
            margin-left: 0;
            list-style: none;
            /* opacity: 0; */
            /* animation: appear-left 0.2s ease-in forwards 1s; */

            /* @keyframes appear-left {
            0% {
              transform: translateX(-50px);
              opacity: 0;
            }

            100% {
              transform: translateX(0%);
              opacity: 1;
            }
          } */

            > * {
              margin-bottom: 5px;
            }

            > li {
              display: grid;
              grid-template-columns: 25px 1fr;
              align-items: center;

              a {
                color: #efa42d;
                text-decoration: underline;
                font-weight: bold;
              }
            }
          `}
        >
          <li>
            <StyleFaCheck />{' '}
            <a href="https://www.gatsbyjs.org/starters/greglobinski/gatsby-starter-hero-blog/">
              Gatsby Hero Blog
            </a>
          </li>
          <li>
            <StyleFaCheck />{' '}
            <a href="https://www.gatsbyjs.org/starters/fabe/gatsby-starter-deck/">
              Gatsby Deck
            </a>
          </li>
        </ul>
        <p>I hope you liked it. I highly appreciate your feedback.</p>
        <p>Thanks!</p>
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
    <FaAngleRight
      css={css`
        color: #efa42d;
        margin-right: 10px;
        display: inline-block;
      `}
    />
  );
};
