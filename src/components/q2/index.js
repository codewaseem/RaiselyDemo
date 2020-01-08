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
          font-size: ${theme.font.size.l};

          &::before {
            content: '(Question 2) ';
            font-size: 12px;
            vertical-align: text-top;
            position: absolute;
            font-weight: bolder;
            transform: translateX(-100%) rotateZ(-35deg);
          }
        `}
      >
        Why do you want to work here over somewhere else?
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
        <p>
          I believe working with{' '}
          <a href="https://raisely.com/">
            <strong>Raisely.com</strong>
          </a>
          , I can make a <Nobr>long-term</Nobr> and <Nobr>life-changing</Nobr>{' '}
          impact on people's lives compared to working for a company to help
          them grow their business.
        </p>

        <p>
          There is a phrase which says that{' '}
          <q>
            Give a man a fish and he will eat for a day. Teach a man how to fish
            and you feed him for a lifetime
          </q>
          . Helping charities raise money will have a similar impact just like
          teaching a man to fish.
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
