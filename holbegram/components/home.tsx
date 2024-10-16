import { View } from 'react-native';
import Svg, { Path, Polyline } from 'react-native-svg';
import { Colors } from '../src/Colors';

export const HomeIcon = ({ color, fill }) => {
  return (
    <View>
      <Svg width="40px" height="40px" viewBox="0 0 512 512" fill="none">
        <Path 
          d="M80,212V448a16,16,0,0,0,16,16h96V328a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24V464h96a16,16,0,0,0,16-16V212" 
          fill={fill} 
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <Path 
          d="M480,256,266.89,52c-5-5.28-16.69-5.34-21.78,0L32,256" 
          fill={fill} 
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <Polyline 
          points="400 179 400 64 352 64 352 133" 
          fill={fill} 
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
      </Svg>
    </View>
  );
};