import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Boxes: () => Node = () => {
  return (
    <View style={styles.content}>
      <Text>Box Test</Text>

    </View>
  )
};

const styles = StyleSheet.create({
  content: {
    width: '50%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
  }
});

export default Boxes;
