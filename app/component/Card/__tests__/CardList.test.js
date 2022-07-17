import React from 'react';
import renderer from 'react-test-renderer';
import CardList from '../CardList';

describe('List Card Component', () => {
  const dataCard = [
    {index: 1, number: 10, status: 'editable', position: 'hide'},
    {index: 2, number: 11, status: 'uneditable', position: 'show'},
    {index: 3, number: 11, status: 'uneditable', position: 'show'},
    {index: 4, number: 10, status: 'editable', position: 'hide'},
  ];

  const setStepToOpen = jest.fn();
  const countOpenCard = 1;
  const onPressCard = jest.fn();

  test('it should render list card compoennt correctly', () => {
    jest.useFakeTimers();
    const wrapper = renderer.create(
      <CardList
        onPressCard={onPressCard}
        listCard={dataCard}
        countOpenCard={countOpenCard}
        setStepToOpen={setStepToOpen}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
