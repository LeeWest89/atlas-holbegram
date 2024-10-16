import { View } from 'react-native';
import Svg, { Circle, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { Colors } from '../src/Colors';

export const SearchIcon = ({ color }) => {
  return (
    <View>
      <Svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
        <G clipPath="url(#clip0_15_152)">
          <Rect width="24" height="24" fill="white" />
          <Circle 
            cx="10.5" 
            cy="10.5" 
            r="6.5" 
            stroke={color}
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <Path 
            d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" 
            fill="#000"
            stroke={color}
            strokeWidth={2}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_15_152">
            <Rect width="24" height="24" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};