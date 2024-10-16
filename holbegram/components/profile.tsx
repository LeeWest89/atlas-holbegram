import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../src/Colors';

export const ProfileIcon = ({ color, fill }) => {
  return (
    <View>
      <Svg width="40px" height="40px" viewBox="0 0 32 32" fill="none">
        <Path 
          d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16Z" 
          fill={fill}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />

        <Path 
          d="M4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18H15A11,11,0,0,0,4,29Z"
          fill={fill}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};