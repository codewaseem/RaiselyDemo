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
            content: '(Question 3) ';
            font-size: 12px;
            vertical-align: text-top;
            position: absolute;
            font-weight: bolder;
            transform: translateX(-100%) rotateZ(-35deg);
          }
        `}
      >
        Look at this{' '}
        <a href="https://gist.github.com/tommaitland/8b5447c4579fa681b2a859e68de90135">
          list of tasks
        </a>{' '}
        and tell us which two you are excited by, which two you want to learn
        and the two you don’t want to do?
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
        <dl>
          <dt>Two things I'm excited about</dt>
          <dd>
            <ol>
              <li>
                Building a suite of Google Cloud Functions in Node to send
                automatic e-cards to donors
              </li>
              <li>
                Creating a complex, multi-step signup form using Create React
                App, Stripe payments and our API
              </li>
            </ol>
          </dd>
          <dt>Two things I want to learn how to do</dt>
          <dd>
            <ol>
              <li>
                Brainstorming how to add a unique campaign requirement into
                Raisely, with only a day to complete it
              </li>
              <li>
                Running a scoping call with a customer to figure out all the
                details about their campaign
              </li>
            </ol>
          </dd>
          <dt>Two things I don't want to do</dt>
          <dd>
            <ol>
              <li>
                Project managing the set-up of a new large campaign on Raisely,
                keeping it on time and budget
              </li>
              <li>
                Looking at data (SQL or spreadsheets) to figure out the A/B test
                to set up in Google Optimize
              </li>
            </ol>
          </dd>
        </dl>
      </div>
      <style jsx>
        {`
          a {
            color: ${theme.text.color.attention};
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
          }

          dt {
            color: ${theme.text.color.attention};
            font-weight: bold;
          }

          dt:not(:first-of-type) {
            margin-top: 10px;
          }

          dd {
            font-size: small;
            max-width: 400px;
          }
        `}
      </style>
    </>
  );
};
