import React from 'react';
import { css } from '@emotion/core';

const CreativeDiv = ({
  height = 600,
  width = 600,
  circleBg = {
    circle1: `rgba(128, 71, 219, 0.8)`,
    circle2: `rgba(128, 71, 219, 0.4)`,
    circle3: `rgba(128, 71, 219, 0.6)`,
  },
  children,
}) => {
  return (
    <div
      css={css`
        position: relative;
        width: 90vw;
        height: 90vw;
        max-width: ${width}px;
        max-height: ${height}px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;

        & > span:nth-of-type(1) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
          transition: 0.5s;
          animation: animate 4s linear infinite;
          background: ${circleBg.circle1};
        }

        & > span:nth-of-type(2) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
          transition: 0.5s;
          animation: animate 6s linear infinite;
          background: ${circleBg.circle2};
        }
        & > span:nth-of-type(3) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
          transition: 0.5s;
          animation: animate2 10s linear infinite;
          background: ${circleBg.circle3};
        }
        @keyframes animate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes animate2 {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}
    >
      <span />
      <span />
      <span />
      <div
        css={css`
          position: relative;
          padding: 15px;
          color: white;
          text-align: left;
          z-index: 99;
          @media (min-width: 400px) {
            padding: calc(${height}px * 0.1) calc(${width}px * 0.08);
            padding-left: calc(${width}px * 0.15);
          }
        `}
      >
        {children}
      </div>

      <style jsx global>
        {`
          html,
          body {
            background-color: #222;
            font-size: calc(
              14px + (16 - 14) * ((100vw - 300px) / (1600 - 300))
            );
          }
        `}
      </style>
    </div>
  );
};

export default CreativeDiv;
