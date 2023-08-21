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

const {width} = Dimensions.get('screen');

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.board}>
        <Row />
        <Row />
        <Row />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.black},

  board: {
    width: width,
    aspectRatio: 1,
    backgroundColor: colors.black,
    marginTop: 'auto',
    justifyContent: 'space-between',
  },
});

export default App;
