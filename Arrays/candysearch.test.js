const searchCandies = require ('./candysearch');
 
describe('searchCandies', () => {
    it('should return name', () => {
      expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers']);
    });
});
