// # Given 2 arrays, create a function that let's a user know (true/false)
// # whether these two arrays contain any common items

// # ------------------------------------
// # double loop solution

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function common_items (array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j<array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(common_items(array1,array2));


// ---------------------------------------
// language specific solution

function  common_items1 (arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

console.log(common_items1(array1, array2));
