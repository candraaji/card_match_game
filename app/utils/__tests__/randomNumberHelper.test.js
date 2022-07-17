import {_shuffleArray, composeCardGenerator} from '../randomNumberHelper';

describe('Test Function in randomNumberHelper', () => {
  const CARD_PAIR_VALUES = [71, 6, 56, 81, 85, 73];
  const mockMath = Object.create(global.Math);
  mockMath.floor = () => 4;
  global.Math = mockMath;

  test('it should test _shuffleArray function', () => {
    const shuffle = _shuffleArray(CARD_PAIR_VALUES);
    expect(shuffle).toStrictEqual([71, 56, 81, 73, 6, 85]);
  });

  test('it should test ComposeCardGenerator function', () => {
    const expectedValue = [
      {index: 0, number: 71, position: 'hide', status: 'editable'},
      {index: 1, number: 56, position: 'hide', status: 'editable'},
      {index: 2, number: 81, position: 'hide', status: 'editable'},
      {index: 3, number: 73, position: 'hide', status: 'editable'},
      {index: 4, number: 6, position: 'hide', status: 'editable'},
      {index: 5, number: 71, position: 'hide', status: 'editable'},
      {index: 6, number: 6, position: 'hide', status: 'editable'},
      {index: 7, number: 56, position: 'hide', status: 'editable'},
      {index: 8, number: 81, position: 'hide', status: 'editable'},
      {index: 9, number: 85, position: 'hide', status: 'editable'},
      {index: 10, number: 73, position: 'hide', status: 'editable'},
      {index: 11, number: 85, position: 'hide', status: 'editable'},
    ];
    const generatePair = composeCardGenerator();
    expect(generatePair).toStrictEqual(expectedValue);
  });
});
