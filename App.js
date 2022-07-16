/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

import MainPage from './app/screens/MainPage';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <MainPage />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#494949',
  },
});

export default App;
