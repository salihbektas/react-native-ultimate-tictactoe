import React from 'react'

import {Dimensions, Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native'
import Row from './src/components/Row'
import colors from './src/colors'
import Infotext from './src/components/Infotext'
import {useAtom} from 'jotai'
import {Initial, store, UltimateBoard} from './src/store'

const {width} = Dimensions.get('screen')

function App(): JSX.Element {
  const [data, setData] = useAtom(store)

  function reset() {
    const initialBoard: UltimateBoard = [
      [['', '', '', '', '', '', '', '', ''], ''],
      [['', '', '', '', '', '', '', '', ''], ''],
      [['', '', '', '', '', '', '', '', ''], ''],
      [['', '', '', '', '', '', '', '', ''], ''],
      [['', '', '', '', '', '', '', '', ''], ''],
      [['', '', '', '', '', '', '', '', ''], ''],
      [['', '', '', '', '', '', '', '', ''], ''],
      [['', '', '', '', '', '', '', '', ''], ''],
      [['', '', '', '', '', '', '', '', ''], '']
    ]

    const init: Initial = {board: initialBoard, turn: 'X', winner: ''}
    setData(init)
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.topside}>
        <Pressable onPress={reset}>
          <Image source={require('./assets/reset.png')} style={styles.reset} />
        </Pressable>
        <Infotext />
      </View>
      <View style={styles.board}>
        <Row rowOrder={0} />
        <Row rowOrder={1} />
        <Row rowOrder={2} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.black},

  topside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  reset: {
    tintColor: colors.white,
    resizeMode: 'contain',
    height: 45,
    aspectRatio: 1
  },

  board: {
    width: width,
    aspectRatio: 1,
    backgroundColor: colors.black,
    justifyContent: 'space-between'
  }
})

export default App
