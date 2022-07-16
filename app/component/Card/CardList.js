import React from 'react';
import Card from './Card';

const CardList = React.memo(function CardList({
  onPressCard,
  listCard,
  countOpenCard,
  setStepToOpen,
}) {
  return listCard.map((dataCard, index) => (
    <Card
      dataCard={dataCard}
      setStepToOpen={setStepToOpen}
      countOpenCard={countOpenCard}
      key={index}
      onPressCard={onPressCard}
    />
  ));
});

export default CardList;
