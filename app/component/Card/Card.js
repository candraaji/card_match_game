import React, {useState, useRef, useEffect} from 'react';
import {Pressable, Animated, Text, Image, StyleSheet} from 'react-native';

const Card = ({dataCard, onPressCard, countOpenCard, setStepToOpen}) => {
  const [isFront, setIsFront] = useState(false);

  const flipAnimation = useRef(new Animated.Value(0)).current;

  let flipRotation = 0;
  flipAnimation.addListener(({value}) => (flipRotation = value));

  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  const flipToFront = () => {
    setIsFront(true);
    setStepToOpen(x => x + 1);
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    setIsFront(false);
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const onPressCardData = () => {
    if (countOpenCard <= 2) {
      flipToFront();
    }
    onPressCard(dataCard);
  };

  useEffect(() => {
    let timer = 1200;
    let cardFlipBackTimer = setTimeout(() => {
      flipToBack();
    }, timer);
    return () => {
      clearTimeout(cardFlipBackTimer);
    };
  }, [onPressCard]);

  if (dataCard.position === 'show') {
    return (
      <>
        <Animated.View style={{...styles.cardFront}}>
          <Text style={styles.dataCardStyle}>{dataCard?.number}</Text>
        </Animated.View>
      </>
    );
  } else {
    return (
      <Pressable
        onPress={() =>
          dataCard?.status === 'editable' ? onPressCardData(dataCard) : null
        }>
        {isFront ? (
          <Animated.View style={{...styles.cardFront, ...flipToBackStyle}}>
            <Text style={styles.dataCardStyle}>{dataCard?.number}</Text>
          </Animated.View>
        ) : (
          <Animated.View style={{...styles.cardFront, ...flipToBackStyle}}>
            <Image
              source={require('../../assets/cardBackground.png')}
              resizeMode={'cover'}
              style={styles.cardBack}
            />
          </Animated.View>
        )}
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  cardFront: {
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 175,
    width: 125,
    borderRadius: 5,
  },
  cardBack: {
    alignSelf: 'center',
    borderWidth: 0.5,
    justifyContent: 'center',
    height: 175,
    width: 125,
    borderRadius: 5,
  },
  dataCardStyle: {
    textAlign: 'center',
  },
});

export default Card;
