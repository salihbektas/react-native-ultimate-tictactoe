import {StyleSheet, View} from 'react-native'
import Subboard from './Subboard'

export default function Row({rowOrder}: {rowOrder: number}) {
  return (
    <View style={styles.row}>
      <Subboard subBoardOrder={3 * rowOrder} />
      <Subboard subBoardOrder={3 * rowOrder + 1} />
      <Subboard subBoardOrder={3 * rowOrder + 2} />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: '32%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
