const fizzbuzz = require ('./fizzbuzz');

describe('fizzbuzz', () => {
  it('should return "Fizz" if the number is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
  it('should return "Buzz" if the number is divisible by 5', () => {
      expect(fizzbuzz(5)).toBe('Buzz');
  });
  it('should return "FizzBuzz" if the number is divisible by 15', () => {
      expect(fizzbuzz(15)).toBe('Fizzbuzz');
  });
  it('should just return the number if its any other number', () => {
      expect(fizzbuzz(7)).toBe(7);
  });
});