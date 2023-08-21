import {View} from 'react-native';
import Subboard from './Subboard';

export default function Row() {
  return (
    <View
      style={{
        width: '100%',
        height: '32%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Subboard />
      <Subboard />
      <Subboard />
    </View>
  );
}
