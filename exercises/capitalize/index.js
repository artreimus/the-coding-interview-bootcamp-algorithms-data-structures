// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1
// function capitalize(str) {
//   const wordsArr = str.split(' ');
//   for (let i = 0; i < wordsArr.length; i++) {
//     wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
//   }

//   return wordsArr.join(' ');
// }

// Solution #2
function capitalize(str) {
  const wordsArr = str.split('');

  wordsArr[0] = wordsArr[0].toUpperCase();
  for (let i = 2; i < wordsArr.length; i++) {
    if (wordsArr[i - 1] === ' ') {
      wordsArr[i] = wordsArr[i].toUpperCase();
    }
  }

  return wordsArr.join('');
}

module.exports = capitalize;
