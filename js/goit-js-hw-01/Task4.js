const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const countDroid = prompt('How many droids do you want to buy?');
if (countDroid === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = countDroid * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${countDroid} дроидов, на счету осталось ${credits -
        totalPrice} кредитов`,
    );
  }
}
