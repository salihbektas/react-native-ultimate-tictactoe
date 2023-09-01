import {Pressable, StyleSheet, Text, View} from 'react-native'
import colors from '../colors'
import {useAtom} from 'jotai/react'
import {Initial, store} from '../store'

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export default function Subrow({
  subBoardOrder,
  subRowOrderOrder
}: {
  subBoardOrder: number
  subRowOrderOrder: number
}) {
  const [data, setData] = useAtom(store)

  const first = data.board[subBoardOrder][0][subRowOrderOrder * 3]
  const second = data.board[subBoardOrder][0][subRowOrderOrder * 3 + 1]
  const third = data.board[subBoardOrder][0][subRowOrderOrder * 3 + 2]

  function isLastPlayed(order: number) {
    return data.lastPlayed === subBoardOrder * 10 + subRowOrderOrder * 3 + order
  }

  function onPress(tileOrder: number) {
    if (
      data.board[subBoardOrder][0][subRowOrderOrder * 3 + tileOrder] !== '' ||
      data.board[subBoardOrder][1] !== '' ||
      data.winner !== ''
    ) {
      return
    }

    const newData = {...data}
    newData.board[subBoardOrder][0][subRowOrderOrder * 3 + tileOrder] = data.turn
    newData.turn = data.turn === 'X' ? 'O' : 'X'
    newData.lastPlayed = subBoardOrder * 10 + subRowOrderOrder * 3 + tileOrder

    calculateWinner(newData)
  }

  function calculateWinner(newData: Initial) {
    for (let i = 0; i < 9; ++i) {
      const [subboard, subWinner] = newData.board[i]

      if (!subWinner) {
        for (let [a, b, c] of lines) {
          if (subboard[a] && subboard[a] === subboard[b] && subboard[a] === subboard[c])
            newData.board[i][1] = subboard[a]
        }
      }
    }

    for (let [a, b, c] of lines) {
      if (
        newData.board[a][1] &&
        newData.board[a][1] === newData.board[b][1] &&
        newData.board[a][1] === newData.board[c][1]
      )
        newData.winner = newData.board[a][1]
    }

    setData(newData)
  }

  return (
    <View style={styles.row}>
      <Pressable
        onPress={() => onPress(0)}
        style={[
          styles.cell,
          {
            backgroundColor: isLastPlayed(0)
              ? first === 'X'
                ? colors.lightBlue
                : colors.lightRed
              : colors.white
          }
        ]}>
        <Text style={[styles.mark, {color: first === 'X' ? colors.blue : colors.red}]}>
          {first}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onPress(1)}
        style={[
          styles.cell,
          {
            backgroundColor: isLastPlayed(1)
              ? second === 'X'
                ? colors.lightBlue
                : colors.lightRed
              : colors.white
          }
        ]}>
        <Text style={[styles.mark, {color: second === 'X' ? colors.blue : colors.red}]}>
          {second}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onPress(2)}
        style={[
          styles.cell,
          {
            backgroundColor: isLastPlayed(2)
              ? third === 'X'
                ? colors.lightBlue
                : colors.lightRed
              : colors.white
          }
        ]}>
        <Text style={[styles.mark, {color: third === 'X' ? colors.blue : colors.red}]}>
          {third}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: '32%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cell: {
    width: '32%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mark: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
