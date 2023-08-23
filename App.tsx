import React from 'react';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Row from './src/components/Row';
import colors from './src/colors';
import Infotext from './src/components/Infotext';

const {width} = Dimensions.get('screen');

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.topside}>
        <Infotext />
      </View>
      <View style={styles.board}>
        <Row rowOrder={0} />
        <Row rowOrder={1} />
        <Row rowOrder={2} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.black},

  topside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  board: {
    width: width,
    aspectRatio: 1,
    backgroundColor: colors.black,
    justifyContent: 'space-between',
  },
});

export default App;
