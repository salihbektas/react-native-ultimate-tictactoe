import {View} from 'react-native';

export default function Subrow() {
  return (
    <View
      style={{
        width: '100%',
        height: '32%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: '32%',
          height: '100%',
          backgroundColor: 'white',
        }}></View>
      <View
        style={{
          width: '32%',
          height: '100%',
          backgroundColor: 'white',
        }}></View>
      <View
        style={{
          width: '32%',
          height: '100%',
          backgroundColor: 'white',
        }}></View>
    </View>
  );
}
