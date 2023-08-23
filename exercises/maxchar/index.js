// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Solution #1
  //   const charMap = {};

  //   let maxKey = '';
  //   let maxValue = 0;

  //   for (let char of str) {
  //     if (charMap[char]) {
  //       charMap[char]++;
  //     } else {
  //       charMap[char] = 1;
  //     }
  //   }

  //   for (let char in charMap) {
  //     if (charMap[char] > maxValue) {
  //       maxValue = charMap[char];
  //       maxKey = char;
  //     }
  //   }

  return maxKey;

  // Solution #2
  const charMap = {};

  let maxKey = '';
  let maxValue = 0;

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }

    if (charMap[char] > maxValue) {
      maxValue = charMap[char];
      maxKey = char;
    }
  }

  return maxKey;
}

module.exports = maxChar;
