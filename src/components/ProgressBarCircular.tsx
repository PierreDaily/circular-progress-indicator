import React from "react";
import styled, { css, keyframes } from "styled-components";

const animateCircle = (progress: number) => keyframes`
0% {
    opacity: 0;
    stroke-dashoffset: 440;
  }
  30% {
    opacity: 0.3;
    stroke-dashoffset: ${440 - (440 / 100) * progress * 0.2};
  }
  80% {
    opacity: 0.8;
    stroke-dashoffset: ${440 - (440 / 100) * progress * 0.4};
  }
  100% {
    opacity: 1;
  }
`;

const textAnimation = (color1: string = "black", color2: string = "black") => keyframes`
  from {
    fill: ${color1};
    opacity: 0.4;
  }

  to {
    fill: ${color2};
  }
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: var(--stroke-width);
  stroke-dasharray: var(--progress-bar-stroke-offset);
`;

interface Circle1Props {
  readonly color?: string;
}

const Circle1 = styled(Circle) <Circle1Props>`
  opacity: 0.5;
  stroke: ${(props) => props.color || "red"};
  stroke-dashoffset: 0;
`;

interface Circle2Props {
  readonly color?: string;
  readonly progress: number;
}
const Circle2 = styled(Circle) <Circle2Props>`
  animation: ${(props) =>
    css`
        ${animateCircle(props.progress)}
      `}
    2s linear;
  stroke: url(#MyGradient);
  stroke-dashoffset: calc(
    var(--progress-bar-stroke-offset) -
      ((var(--progress-bar-stroke-offset) / 100) * ${(props) => props.progress})
  );
  transform-origin: center;
  transform: rotate(-90deg);
`;

interface SVGProps {
  readonly color1?: string;
  readonly color2?: string;
}

const SVG = styled.svg <SVGProps>`
  --progress-bar-stroke-offset: 440;
  --stroke-width: 10px;
  position: relative;
  width: 50%;

  text {
    animation: ${(props) =>
    css`
          ${textAnimation(props.color1, props.color2)}
        `} 2s linear;
    font-size: 200%;
    transform-origin: center;
  }
`;

interface Props {
  color1?: string;
  color2?: string;
  progress: number;
}

const ProgressBarCircular: React.FC<Props> = ({
  color1,
  color2,
  progress,
}) => {
  const filteredProgress = Math.abs(progress) > 100 ? 100 : Math.abs(progress);
  return (
    <SVG viewBox="0 0 150 150" color1={color1} color2={color2}>
      <linearGradient id="MyGradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color={color1} />
        <stop offset="100%" stop-color={color2} />
      </linearGradient>
      <Circle1 cx="75" cy="75" r="70" color={color1}></Circle1>
      <Circle2
        cx="75"
        cy="75"
        r="70"
        color={color2}
        progress={filteredProgress}
      ></Circle2>
      <text x="50%" y="55%" text-anchor="middle" fill={color2}>
        {filteredProgress}%
      </text>
    </SVG>
  );
};

export { ProgressBarCircular };
