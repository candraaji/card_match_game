import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Text,
} from 'react-native';
import {composeCardGenerator} from '../utils/randomNumberHelper';
import Header from '../component/Header';
import CardList from '../component/Card/CardList';

const MainPage = () => {
  const [randomNumber, setRandomNumber] = React.useState([]);
  const [pickCard, setPickCard] = React.useState({});
  const [stepToOpen, setStepToOpen] = React.useState(0);
  const [countOpenCard, setCountOpenCard] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [isCompleted, setIsCompleted] = React.useState(false);

  useEffect(() => {
    (async () => {
      const dataCard = await composeCardGenerator();
      await setRandomNumber(dataCard);
    })();
  }, []);

  const onPressCard = card => {
    setCountOpenCard(x => x + 1);
    if (pickCard && pickCard?.index === card?.index) {
      setPickCard({});
    }
    setPickCard(card);

    if (
      pickCard &&
      pickCard?.number === card?.number &&
      pickCard?.index !== card?.index
    ) {
      const copyRandomNumber = randomNumber;
      copyRandomNumber.map(val => {
        if (val === card) {
          val.status = 'uneditable';
          val.position = 'show';
        }
        if (val === pickCard) {
          val.status = 'uneditable';
          val.position = 'show';
        }
      });
      setRandomNumber(copyRandomNumber);
    }

    if (countOpenCard >= 2) {
      setTimeout(() => {
        setCountOpenCard(1);
      }, 2000);
    }

    const detectCompleted = randomNumber.filter(
      val => val.status !== 'uneditable',
    );
    if (detectCompleted.length === 0) {
      setIsCompleted(true);
      setTimeout(() => {
        setIsCompleted(false);
        onPresRestart();
      }, 2000);
    }
  };

  const onPresRestart = async () => {
    await setLoading(true);
    await setPickCard({});
    await setStepToOpen(0);
    await setCountOpenCard(1);
    const dataCard = await composeCardGenerator();
    await setRandomNumber(dataCard);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <Header stepToOpen={stepToOpen} onPresRestart={onPresRestart} />
      {isCompleted ? (
        <View style={styles.containerOthers}>
          <Text style={styles.textCongrations}>
            CONGRATULATIONS !! {'\n'} YOUR COMPLETED WITH {stepToOpen} STEP !
          </Text>
        </View>
      ) : loading ? (
        <View style={styles.containerOthers}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <CardList
            listCard={randomNumber}
            setStepToOpen={setStepToOpen}
            onPressCard={onPressCard}
            countOpenCard={countOpenCard}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: Dimensions.get('window').height - 120,
    padding: '1%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerOthers: {
    height: Dimensions.get('window').height - 120,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textCongrations: {
    color: 'white',
    textAlign: 'center',
  },
});

export default MainPage;
