const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
   return names.map(people => {
     return `Hi ${people[name]}! ${people[discount]}% off our best candies for you today!`;
   });
};

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];