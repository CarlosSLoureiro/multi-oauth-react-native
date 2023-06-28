import Svg, { G, Path, Polygon,Rect } from 'react-native-svg';

import { APIIconProps } from './types';

export default function APIIcon({ size = `100px`, color = `#0059ff` }: APIIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <G>
        <Rect y="0" fill="none" width="24" height="24" />
        <G transform="translate(1.000000, 8.000000)">
          <Path
            fillRule="evenodd"
            fill={color}
            d="M2-1.9c-1.1,0-2.3,1.1-2.3,2.2V10H2V5.5h2.2V10h2.2V0.3c0-1.1-1.1-2.2-2.3-2.2H2 L2-1.9z M2,3.2v-3h2.2v3H2L2,3.2z"
          />
          <Path
            fillRule="evenodd"
            fill={color}
            d="M10.3-2C9.1-2,8-0.9,8,0.2V10l2.2,0V5.5h2.2c1.1,0,2.3-1.1,2.3-2.2l0-3 c0-1.1-1.1-2.2-2.3-2.2H10.3L10.3-2z M10.2,3.2v-3h2.2v3H10.2L10.2,3.2z"
          />
          <Polygon
            fillRule="evenodd"
            fill={color}
            points="18.5,0.3 18.5,7.8 16.2,7.8 16.2,10 23,10 23,7.8 20.8,7.8 20.8,0.3 23,0.3 23,-1.9 16.2,-1.9 16.2,0.3"
          />
          <Polygon fillRule="evenodd" fill={color} points="2,5.5 2,3.2 3.5,3.2" />
          <Polygon fillRule="evenodd" fill={color} points="10.2,5.5 10.2,3.2 11.5,3.2" />
          <Polygon fillRule="evenodd" fill={color} points="18.5,1.8 18.5,1.8 18.5,0.3 20.8,0.3" />
        </G>
      </G>
    </Svg>
  );
}
