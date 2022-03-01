const addToBatch = (array, number) => {
  if (array.length >= 5) {
   return array; 
  } else {
   return array.concat(number); 
  } 
};

const checkLength = (num) => {
  if (num.length <= 10) {
    return true;
  }
};

const filterLongNumbers = (array2) => {
  return array2.filter(numberTwo => checkLength(numberTwo));
};

