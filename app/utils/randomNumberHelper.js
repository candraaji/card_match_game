const CARD_PAIR_VALUES = [71, 6, 56, 81, 85, 73];

const _shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const composeCardGenerator = () => {
  let dataCard = [];
  let index = 0;
  const randomSet = CARD_PAIR_VALUES.concat(CARD_PAIR_VALUES);
  _shuffleArray(randomSet).map(dataSet => {
    dataCard.push({
      index: index++,
      number: dataSet,
      position: 'hide',
      status: 'editable',
    });
  });
  return dataCard;
};

export {composeCardGenerator};
