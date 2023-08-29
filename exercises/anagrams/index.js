// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function generateCharMap(str, charMap) {
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
}

// Solution #1
// function anagrams(stringA, stringB) {
//   const charMapA = {};
//   const charMapB = {};

//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   generateCharMap(stringA, charMapA);
//   generateCharMap(stringB, charMapB);

//   const keysA = Object.keys(charMapA);
//   const keysB = Object.keys(charMapB);

//   if (keysA.length !== keysB.length) return false;

//   for (let key of keysA) {
//     if (!charMapB[key] | (charMapA[key] !== charMapB[key])) return false;
//   }

//   return true;
// }

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// Solution #2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
