import Component from '../src/component';

describe('Group One', () => {
  test('case-1', () => {
    expect(new Component().x()).toBe(42);
  });
});
