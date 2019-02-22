import init from './init'

describe('測試 init 功能 x 100 倍', () => {
  test.each([
    ['數字帶 10', 10, 1000],
    ['數字帶 79', 79, 7900],
    ['數字帶 -12', -12, -1200],
    ['數字帶 5', 5, 500],
    ['數字帶 0', 0, 0],
    ['數字帶 null', null, false],
    ['數字帶字串 5', '5', false],
  ])('%s 的測試結果', (name, input, output) => {
    expect(init(input)).toBe(output);
  })
});

