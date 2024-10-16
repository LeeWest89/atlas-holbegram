import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../src/Colors';

export const UploadIcon = () => {
  return (
    <View>
      <Svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" style={{ transform: [{ rotate: '90deg' }] }}>
        <Path 
          d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195" 
          stroke={Colors.teal} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <Path 
          d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" 
          stroke={Colors.teal} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};