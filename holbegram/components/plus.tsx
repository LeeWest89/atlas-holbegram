import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../src/Colors';

export const PlusIcon = ({ color }) => {
  return (
    <View>
      <Svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
        <Path 
          d="M4 12H20M12 4V20" 
          fill="none" 
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};