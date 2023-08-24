import {StyleSheet, Text, View} from 'react-native'
import Subrow from './Subrow'
import colors from '../colors'
import {useAtomValue} from 'jotai'
import {store} from '../store'

export default function Subboard({subBoardOrder}: {subBoardOrder: number}) {
  const subWinner = useAtomValue(store).board[subBoardOrder][1]
  return (
    <View style={styles.board}>
      <Subrow subBoardOrder={subBoardOrder} subRowOrderOrder={0} />
      <Subrow subBoardOrder={subBoardOrder} subRowOrderOrder={1} />
      <Subrow subBoardOrder={subBoardOrder} subRowOrderOrder={2} />
      <View style={styles.ultimateCell}>
        <Text style={[styles.mark, {color: subWinner === 'X' ? colors.blue : colors.red}]}>
          {subWinner}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    width: '32%',
    height: '100%',
    justifyContent: 'space-between'
  },

  ultimateCell: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mark: {
    marginTop: -20,
    fontSize: 120,
    fontWeight: 'bold',
    opacity: 0.75
  }
})
