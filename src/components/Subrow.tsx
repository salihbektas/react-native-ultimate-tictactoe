import {StyleSheet, Text, View} from 'react-native';
import colors from '../colors';

export default function Subrow() {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={[styles.mark, {color: colors.blue}]}>X</Text>
      </View>
      <View style={styles.cell}>
        <Text style={[styles.mark, {color: colors.red}]}>O</Text>
      </View>
      <View style={styles.cell}></View>
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

  cell: {
    width: '32%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  mark: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
