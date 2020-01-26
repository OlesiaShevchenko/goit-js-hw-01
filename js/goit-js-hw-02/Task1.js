const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} -`, array[i]);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// friends[2] = 'ddd';
// console.log(friends[2]);
// console.log(friends.length);

// for (let i = 0; i < friends.length; i += 1) {
//   //   console.log(i);
//   console.log(`${i + 1} -`, friends[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

// const nameToFind = 'k';
// let message;
// for (let i = 0; i < friends.length; i += 1) {
//   const friend = friends[i];
//   if (nameToFind === friend) {
//     console.log('exist');
//   }
// }

// for (const friend of friends) {
//   if (nameToFind === friend) {
//     console.log('exist');
//   } else {
//     message = 'no';
//   }
// }
// console.log(message );

// const fnA = function() {
//   console.log('Начала выполняться [fnA]');
//   fnB();
//   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };

// const fnB = function() {
//   console.log('Выполняется [fnB]');
// };

// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');
