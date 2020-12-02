import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { v4 as uuidv4 } from 'uuid';



const strokeOffset = 440;
const strokeWidth = "10px";

const animateCircle = (progress: number) => keyframes`
0% {
    stroke-dashoffset: 440;
  }
  30% {
    stroke-dashoffset: ${440 - (440 / 100) * progress * 0.2};
  }
  80% {
    stroke-dashoffset: ${440 - (440 / 100) * progress * 0.4};
  }
  100% {
  }
`;

const textAnimation = (color1: string = "black", color2: string = "black") => keyframes`
  from {
    fill: ${color1};
  }

  to {
    fill: ${color2};
  }
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: ${strokeWidth};
  stroke-dasharray: ${strokeOffset};
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
  stroke-dashoffset: ${(props) => strokeOffset - (strokeOffset / 100) * props.progress};
  transform-origin: center;
  transform: rotate(-90deg);
`;

interface SVGProps {
  readonly color1?: string;
  readonly color2?: string;
}

const SVG = styled.svg <SVGProps>`
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
  const [percentage, setPercentage] = useState(0);
  const gradientIdRef = useRef(uuidv4());
  const filteredProgress = Math.abs(progress) > 100 ? 100 : Math.abs(progress);
  useEffect(() => {
    if (percentage < filteredProgress) {
      setTimeout(() => setPercentage((oldState) => oldState + 1), 2000 / (filteredProgress));
    }
  }, [percentage, filteredProgress]);

  return (
    <SVG viewBox="0 0 150 150" color1={color1} color2={color2}>
      <linearGradient id={gradientIdRef.current} gradientTransform="rotate(90)">
        <stop offset="0%" stopColor={color1} />
        <stop offset="100%" stopColor={color2} />
      </linearGradient>
      <Circle1 cx="75" cy="75" r="70" color={color1}></Circle1>
      <Circle2
        cx="75"
        cy="75"
        r="70"
        color={color2}
        progress={filteredProgress}
        stroke={`url(#${gradientIdRef.current})`}
        strokeLinecap="round"
      ></Circle2>
      <text x="50%" y="55%" textAnchor="middle" fill={color2}>
        {percentage}%
      </text>
    </SVG>
  );
};

export { ProgressBarCircular };
