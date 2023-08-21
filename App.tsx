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

const {width} = Dimensions.get('screen');

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          width: width,
          aspectRatio: 1,
          backgroundColor: 'black',
          marginTop: 'auto',
          justifyContent: 'space-between',
        }}>
        <Row />
        <Row />
        <Row />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
