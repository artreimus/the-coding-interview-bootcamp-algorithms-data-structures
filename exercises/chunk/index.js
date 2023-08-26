// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// If length === size:
// push chunk into chunks
//

function chunk(array, size) {
  //   Solution #1
  //   const chunks = [];
  //   const chunk = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (chunk.length === size) {
  //       chunks.push([...chunk]);
  //       chunk.splice(0, chunk.length);
  //     }
  //     if (i === array.length - 1) {
  //       chunks.push([...chunk, array[i]]);
  //     } else {
  //       chunk.push(array[i]);
  //     }
  //   }
  //   return chunks;
  //   Solution #2
  //   const chunked = [];
  //   for (let element of array) {
  //     const last = chunked[chunked.length - 1];
  //     if (!last || last.length === size) {
  //       chunked.push([element]);
  //     } else {
  //       last.push(element);
  //     }
  //   }
  //   return chunked;
  // Solution #3
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;

  //   Solution #4
  //   const chunked = [];

  //   while (array.length > 0) {
  //     chunked.push(array.splice(0, size));
  //   }
  //   return chunked;
}

module.exports = chunk;
