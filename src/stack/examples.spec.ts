import * as examples from './examples';

describe('#isPolindrome()', () => {
  describe('when string looks like polindrome', () => {
    it('should return true', () => {
      expect(examples.isPolindrome('racecar')).toBe(true);
    });
  });

  describe('when string looks differencly', () => {
    it('should return false', () => {
      expect(examples.isPolindrome('raceca')).toBe(false);
    });
  });
})