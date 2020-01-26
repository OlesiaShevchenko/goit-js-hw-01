const findLongestWord = function(string) {
  const words = string.split(' ');
  let word = words[0];
  for (let i = 0; i < words.length; i += 1) {
    const currentWord = words[i];
    if (currentWord.length > word.length) {
      word = currentWord;
    }
  }
  return word;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
