import { Box, createIcon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

function CircularProgressBar({ sqSize, strokeWidth, percentage, ...props }) {
  const [radius, setRadius] = useState(0);
  const [viewBox, setViewBox] = useState('0 0 0 0');
  const [dashArray, setDashArray] = useState(radius * Math.PI * 2);
  const [dashOffset, setDashOffset] = useState(100);

  useEffect(() => {
    setRadius((sqSize - strokeWidth) / 2);
    setViewBox(`0 0 ${sqSize} ${sqSize}`);
    setDashArray(radius * Math.PI * 2);
    setDashOffset(dashArray - (dashArray * percentage) / 100);
  }, [radius, viewBox, dashArray, dashOffset]);

  const Circle = createIcon({
    viewBox: viewBox,
    path: [
      <circle fill="none" stroke="#ddd" cx={sqSize / 2} cy={sqSize / 2} r={radius} strokeWidth={`${strokeWidth}px`} />,
      <circle
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />,
      <text fontSize="3em" fontWeight="bold" fill="red" x="50%" y="50%" dy=".3em" textAnchor="middle">
        {`${percentage}%`}
      </text>,
    ],
  });

  return (
    <Box>
      <Circle w={sqSize} h={sqSize} />
    </Box>
  );
}

export default CircularProgressBar;
