const Fizzbuzz = (number) => {
    if ((number % 3 === 0) && (number % 5 === 0)){
    return 'Fizzbuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

for (let number = 1; number < 51; number++) {
    console.log(`Fizzbuzz result for ${number} is ${Fizzbuzz(number)}`);
    }