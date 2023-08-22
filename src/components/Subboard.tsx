import {StyleSheet, View} from 'react-native';
import Subrow from './Subrow';

export default function Subboard({subBoardOrder}: {subBoardOrder: number}) {
  return (
    <View style={styles.board}>
      <Subrow subBoardOrder={subBoardOrder} subRowOrderOrder={0} />
      <Subrow subBoardOrder={subBoardOrder} subRowOrderOrder={1} />
      <Subrow subBoardOrder={subBoardOrder} subRowOrderOrder={2} />
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
