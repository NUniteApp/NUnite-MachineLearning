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

const Header: () => Node = () => {
  return (
    <View style={styles.header}>
      <Text>Header Component</Text>

    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
  }
});

export default Header;
