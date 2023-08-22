import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../colors';
import {useAtom} from 'jotai/react';
import {store} from '../store';

export default function Subrow({
  subBoardOrder,
  subRowOrderOrder,
}: {
  subBoardOrder: number;
  subRowOrderOrder: number;
}) {
  const [data, setData] = useAtom(store);

  let first = data.board[subBoardOrder][0][subRowOrderOrder * 3];
  let second = data.board[subBoardOrder][0][subRowOrderOrder * 3 + 1];
  let third = data.board[subBoardOrder][0][subRowOrderOrder * 3 + 2];

  function onPress(tileOrder: number) {
    if (data.board[subBoardOrder][0][subRowOrderOrder * 3 + tileOrder] !== '')
      return;

    const newData = {...data};
    newData.board[subBoardOrder][0][subRowOrderOrder * 3 + tileOrder] =
      data.turn;
    newData.turn = data.turn === 'X' ? 'O' : 'X';
    setData(newData);
  }
  return (
    <View style={styles.row}>
      <Pressable onPress={() => onPress(0)} style={styles.cell}>
        <Text
          style={[
            styles.mark,
            {color: first === 'X' ? colors.blue : colors.red},
          ]}>
          {first}
        </Text>
      </Pressable>
      <Pressable onPress={() => onPress(1)} style={styles.cell}>
        <Text
          style={[
            styles.mark,
            {color: second === 'X' ? colors.blue : colors.red},
          ]}>
          {second}
        </Text>
      </Pressable>
      <Pressable onPress={() => onPress(2)} style={styles.cell}>
        <Text
          style={[
            styles.mark,
            {color: third === 'X' ? colors.blue : colors.red},
          ]}>
          {third}
        </Text>
      </Pressable>
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
