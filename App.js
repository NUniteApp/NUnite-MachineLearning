/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Header from './src/Header';
import Boxes from './src/Boxes';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <Header>
        <Boxes>
        </Boxes>
      </Header>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
