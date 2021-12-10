const stringLength = (string) => {
  if(string.length < 1 || string.length > 8) {
    throw new Error("string length can't be shorter than 1 character or longer than 8 characters.");
  }
  return string.length;
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};


class Calculator {

  static add = (a,b) => a+b;

  static substract = (a,b) => a-b;

  static multiply = (a,b) => a*b;
  
  static divide = (a,b) => {
    if (b=== 0) {
      throw new Error('Can not be divided by zero, therefore is invalid!')
    } else {
      return a/b; 
    }
  }
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {stringLength, reverseString, Calculator, capitalize};
