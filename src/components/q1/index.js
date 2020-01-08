import React, { useContext } from 'react';
import { css } from '@emotion/core';
import { ThemeContext } from '../../layouts';
import { FaCheck } from 'react-icons/fa';

export default () => {
  const themContext = useContext(ThemeContext);

  return (
    <>
      <h2
        css={css`
          font-size: ${themContext.font.size.l};
          /* animation: appear-second 1s ease-in forwards; */

          &::before {
            content: '(Question 1) ';
            font-size: 12px;
            vertical-align: text-top;
            position: absolute;
            font-weight: bolder;
            transform: translateX(-100%) rotateZ(-35deg);
          }
        `}
      >
        Why would you be a good fit for the Campaign Developer role?
      </h2>
      <ul
        css={css`
          margin-top: 25px;
          font-size: ${themContext.font.size.s};
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
          }
          /* &::before {
              content: '(My Answer) ';
              font-size: 12px;
              vertical-align: text-top;
              position: absolute;
              font-weight: bold;
              transform: translateX(-100%) rotateZ(-35deg); */
        `}
      >
        <p>
          <strong>Because I have the following characteristics/skills</strong>
        </p>
        <li>
          <StyleFaCheck /> Critical thinking and problem-solving skills.
        </li>
        <li>
          <StyleFaCheck /> Eager and quick to learn new things.
        </li>
        <li>
          <StyleFaCheck /> Technology and web enthusiast.
        </li>
        <li>
          <StyleFaCheck /> Passion to serve humanity and making lives better.
        </li>
        <li>
          <StyleFaCheck /> And of course, skilled with HTML5, CSS3, JavaScript,
          React, etc, needed for this role.
        </li>
      </ul>
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
