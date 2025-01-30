import { View, Image, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function State({ image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ margin: 10 }}>
        <Svg width={65} height={65}>
          <Circle cx="30" cy="30" r="25" fill="lightgray" />
          <Image
            source={{ uri: image }}
            style={{ position: 'absolute', top: 0, left: 0, width: 65, height: 65, borderRadius: 30 }}
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
}
