import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, act} from '@testing-library/react-native';

import MainPage from '../MainPage';

describe('MainPage Screens', () => {
  const dataCard = [
    {index: 1, number: 11, status: 'uneditable', position: 'show'},
    {index: 2, number: 11, status: 'uneditable', position: 'show'},
  ];
  const pickCard = {
    index: 1,
    number: 11,
    status: 'uneditable',
    position: 'show',
  };
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('it should render MainPage screens correctly', () => {
    const wrapper = renderer.create(<MainPage />);
    act(() => {
      jest.runAllTimers();
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('it should render MainPage Completed Screens', () => {
    React.useState = jest
      .fn()
      .mockReturnValueOnce([dataCard, {}])
      .mockReturnValueOnce([pickCard, {}])
      .mockReturnValueOnce([0, {}])
      .mockReturnValueOnce([1, {}])
      .mockReturnValueOnce([false, {}])
      .mockReturnValueOnce([true, {}]);

    const wrapper = renderer.create(<MainPage />);
    act(() => {
      jest.runAllTimers();
    });
    expect(wrapper).toMatchSnapshot();
  });
});
