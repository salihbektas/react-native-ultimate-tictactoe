import {StyleSheet, View} from 'react-native';
import Subrow from './Subrow';

export default function Subboard() {
  return (
    <View style={styles.board}>
      <Subrow />
      <Subrow />
      <Subrow />
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: '32%',
    height: '100%',
    justifyContent: 'space-between',
  },
});
