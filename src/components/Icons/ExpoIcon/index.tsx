import Svg, { Circle, Line,Path, Polygon, Polyline } from "react-native-svg";

import { ExpoIconProps } from './types';

export default function ExpoIcon ({ size = `100px`, color = `#000` }: ExpoIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 184 184">
      <Circle
        fill="#FFF"
        stroke={color}
        cx="159.53"
        cy="36.28"
        r="24.07"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Path
        fill={color}
        stroke={color}
        d="M180.24,24a35.36,35.36,0,0,1-34.86,29.47c-.95,0-1.88,0-2.81-.12A24.07,24.07,0,0,0,180.24,24Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Polygon
        stroke={color}
        fill="#FFF"
        points="1.5 138.64 1.74 47.21 80.44 92.92 80.44 184.35 1.5 138.64"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Polygon
        stroke={color}
        fill="#FFF"
        points="1.74 47.21 80.56 1.5 119.9 24.36 80.44 47.21 119.9 70.07 80.44 92.92 1.74 47.21"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Polygon
        fill={color}
        stroke={color}
        points="119.9 70.07 119.9 115.78 159.37 92.92 159.61 138.64 80.44 184.35 80.44 92.92 119.9 70.07"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Polygon
        fill={color}
        stroke={color}
        points="119.9 24.36 119.9 70.07 80.44 47.21 119.9 24.36"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Polygon
        stroke={color}
        fill="#FFF"
        points="119.9 70.07 159.37 92.92 119.9 115.78 119.9 70.07"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Line
        stroke={color}
        fill="#FFF"
        x1="80.43"
        y1="139.91"
        x2="1.5"
        y2="94.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Polyline
        fill="none"
        stroke={color}
        points="119.84 24.36 41.03 70.07 41.03 161.54"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <Line
        stroke={color}
        fill="#FFF"
        x1="119.9"
        y1="70.07"
        x2="41.05"
        y2="24.41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </Svg>
  );
}
