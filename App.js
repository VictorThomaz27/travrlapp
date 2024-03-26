/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.sectionTitle}>Hello</Text>
        <Text style={styles.sectionTitle}>World</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

});

export default App;
