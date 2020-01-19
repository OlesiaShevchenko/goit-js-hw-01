let input = 0;
let total = 0;

while (input != null) {
  total = Number(total) + Number(input);
  input = prompt('Введите число');
}
console.log(total);
alert(`Общая сумма чисел равна ${total}`);
