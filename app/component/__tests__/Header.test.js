import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header Component', () => {
  const stepToOpen = 99;
  const onPressRestart = jest.fn();

  test('it should render header compoennt correctly', () => {
    jest.useFakeTimers();
    const wrapper = renderer.create(
      <Header stepToOpen={stepToOpen} onPresRestart={onPressRestart} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
