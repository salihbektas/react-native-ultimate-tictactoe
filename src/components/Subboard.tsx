import {View} from 'react-native';
import Subrow from './Subrow';

export default function Subboard() {
  return (
    <View
      style={{
        width: '32%',
        height: '100%',
        justifyContent: 'space-between',
      }}>
      <Subrow />
      <Subrow />
      <Subrow />
    </View>
  );
}
