const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {

  // base case
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  // length of the array
  const length = array.length;
  //divide the array length in two and floor it to get a int
  const middle = Math.floor(length/2);

  // splice the left side into left variable

  // left splice 0 - middle
  const left = array.slice(0,middle);
  // right middle to end
  const right = array.slice(middle);
  

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  // results array to save our sorted stuff in
  const result = [];
  
  // left and right index

  let leftIndex = 0;
  let rightIndex = 0;

  // loops

  // loop condition: if both index are smaller than the length of left and right
  while (leftIndex < left.length && rightIndex < right.length) {

    //check if leftindex value is bigger, if yes push it in result 
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else { // else push the right index
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // concat left and right together acc to index 
  return result.concat(left.splice(leftIndex)).concat(right.slice(rightIndex));

}


const answer = mergeSort(numbers);
console.log(answer);