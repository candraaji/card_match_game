import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render, act} from '@testing-library/react-native';
import Card from '../Card';

afterEach(cleanup);

describe('Card Component', () => {
  const dataCard = {index: 1, number: 10, status: 'editable', position: 'hide'};
  const setStepToOpen = jest.fn();
  const countOpenCard = 1;
  const index = 1;
  const onPressCard = jest.fn();
  jest.useFakeTimers();

  test('it should render card compoennt correctly', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({current: 0});
    const wrapper = renderer.create(
      <Card
        dataCard={dataCard}
        setStepToOpen={setStepToOpen}
        countOpenCard={countOpenCard}
        key={index}
        onPressCard={onPressCard}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should can press the card', () => {
    const testIdName = 'PressableCard';

    const {getByTestId} = render(
      <Card
        dataCard={dataCard}
        setStepToOpen={setStepToOpen}
        countOpenCard={countOpenCard}
        key={index}
        onPressCard={onPressCard}
      />,
    );

    const foundButton = getByTestId(testIdName);

    fireEvent.press(foundButton);
    act(() => {
      jest.runAllTimers();
    });

    expect(foundButton).toBeTruthy();
  });
});
