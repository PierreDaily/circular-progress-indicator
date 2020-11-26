import React from "react";
import styled, { css, keyframes } from "styled-components";

const animateCircle = (progress: number) => keyframes`
0% {
    opacity: 0;
    stroke-dashoffset: 440;
  }
  30% {
    opacity: 0.3;
    stroke-dashoffset: ${440 - ((440 / 100) * progress * 0.2)};
  }
  80% {
    opacity: 0.8;
    stroke-dashoffset: ${440 - ((440 / 100) * progress * 0.4)};
  }
  100% {
    opacity: 1;
  }
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: var(--stroke-width);
  stroke-dasharray: var(--progress-bar-stroke-offset);
  transform: translate(
    calc(var(--stroke-width) / 2),
    calc(var(--stroke-width) / 2)
  );
`;

interface Circle1Props {
  readonly colour?: string;
};

const Circle1 = styled(Circle) <Circle1Props>`
  stroke: ${props => props.colour || "red"};
  stroke-dashoffset: 0;
`;

interface Circle2Props {
  readonly colour?: string;
  readonly progress: number;
};
const Circle2 = styled(Circle) <Circle2Props>`
  animation: ${(props) => css`${animateCircle(props.progress)}`} 2s linear;

  stroke: ${props => props.colour || "blue"};
  stroke-dashoffset: calc(
    var(--progress-bar-stroke-offset) -
      ((var(--progress-bar-stroke-offset) / 100) * ${props => props.progress})
  );
`;

const Container = styled.div`
  --progress-bar-stroke-offset: 440;
  --stroke-width: 10px;

  width: 50%;
`;

const SVG = styled.svg`
  transform: rotate(-90deg);
`;

interface Props {
  colour1?: string,
  colour2?: string,
  progress: number
};

const ProgressBarCircular: React.FC<Props> = ({ colour1, colour2, progress }) => (
  <Container>
    <SVG width="300" height="200">
      <Circle1 cx="70" cy="70" r="70" colour={colour1}></Circle1>
      <Circle2 cx="70" cy="70" r="70" colour={colour2} progress={progress}></Circle2>
    </SVG>
  </Container>
);

export { ProgressBarCircular };
