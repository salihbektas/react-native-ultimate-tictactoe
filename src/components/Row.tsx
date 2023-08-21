import {StyleSheet, View} from 'react-native';
import Subboard from './Subboard';

export default function Row() {
  return (
    <View style={styles.row}>
      <Subboard />
      <Subboard />
      <Subboard />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: '32%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
