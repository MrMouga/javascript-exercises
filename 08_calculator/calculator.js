const add = function(num1,num2) {
return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

function sum (array) {
	return array.reduce((total, current) => total + current, 0)
};


function multiply(array) {
  return array.reduce((total, current) => total * current, 1)
};


function power(num1, num2) {
  return Math.pow(num1, num2);
}

function factorial (num){

  if(num===0){
    return 1;
  }

  else{
    for(let i=num-1; i>0; i--){
      num *= i;
    }
    return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
