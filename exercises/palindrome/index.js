// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // Solution #1
  //   return str.split('').reduce((rev, char) => char + rev, '') === str;
  // Solution #2
  return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;
