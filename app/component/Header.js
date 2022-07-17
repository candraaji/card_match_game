import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Header = ({stepToOpen, onPresRestart}) => {
  return (
    <View style={styles.scoreboardContainer}>
      <Pressable testID="restartButton" onPress={onPresRestart}>
        <Text style={styles.textColor}>RESTART</Text>
      </Pressable>
      <Text style={styles.textColor}>STEPS : {stepToOpen}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreboardContainer: {
    minHeight: 50,
    marginTop: '5%',
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
  },
  textColor: {
    color: 'white',
  },
});

export default Header;
