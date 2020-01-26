let input = prompt('Please enter number');
const numbers = [];
let total = 0;

while (input !== null) {
  numbers.push(input);
  console.log(numbers);
  total = total + Number(input);
  input = prompt('Please enter number');
}

console.log(total);
alert(`Общая сумма чисел равна ${total}`);
