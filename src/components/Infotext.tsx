import {useAtomValue} from 'jotai'
import {StyleSheet, Text} from 'react-native'
import {store} from '../store'
import colors from '../colors'

export default function Infotext() {
  const {winner, turn, board} = useAtomValue(store)

  function isDraw() {
    if (winner !== '') return false

    for (let i = 0; i < 9; ++i) {
      if (board[i][1] === '')
        for (let j = 0; j < 9; ++j) {
          if (board[i][0][j] === '') return false
        }
    }

    return true
  }

  const winnerX = (
    <Text style={styles.text}>
      Player <Text style={styles.x}>X</Text> Won
    </Text>
  )

  const winnerO = (
    <Text style={styles.text}>
      Player <Text style={styles.o}>O</Text> Won
    </Text>
  )

  const turnX = (
    <Text style={styles.text}>
      Turn <Text style={styles.x}>X</Text>
    </Text>
  )

  const turnO = (
    <Text style={styles.text}>
      Turn <Text style={styles.o}>O</Text>
    </Text>
  )

  return (
    <Text style={styles.text}>
      {isDraw()
        ? 'Draw'
        : winner === 'X'
        ? winnerX
        : winner === 'O'
        ? winnerO
        : turn === 'X'
        ? turnX
        : turnO}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 40
  },

  x: {
    color: colors.blue
  },

  o: {
    color: colors.red
  }
})
