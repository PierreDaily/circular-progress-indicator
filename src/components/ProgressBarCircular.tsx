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
  transform-origin: center;
  transform: rotate(-90deg);
`;

const Container = styled.div`
  --progress-bar-stroke-offset: 440;
  --stroke-width: 10px;
  position: relative;
  width: 50%;

  text {
    font-size: 3rem;
  }
`;

const SVG = styled.svg`
  // transform: rotate(-90deg);
`;

interface Props {
  colour1?: string,
  colour2?: string,
  progress: number
};

const ProgressBarCircular: React.FC<Props> = ({ colour1, colour2, progress }) => {
  const filteredProgress = Math.abs(progress) > 100 ? 100 : Math.abs(progress);
  return (
    <Container>
      <SVG viewBox="0 0 150 150">
        <Circle1 cx="75" cy="75" r="70" colour={colour1}></Circle1>
        <Circle2 cx="75" cy="75" r="70" colour={colour2} progress={filteredProgress}></Circle2>
        <text x="50%" y="55%" text-anchor="middle">{filteredProgress}</text>
      </SVG >
    </Container>
  );
};

export { ProgressBarCircular };
