const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function swap(index1, index2) {
//    [numbers[index1], numbers[index2]] = [numbers[index2], numbers[index1]];

// }

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let index_small = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[index_small]) {
                index_small = j;
            }
        }
        // swap(i, index_small);
        [array[i], numbers[index_small]] = [numbers[index_small], numbers[i]];

    }

    // andrei's solution
    // const length = array.length;

    // for(let i = 0; i < length; i++) {
    //     let min = i;
    //     let temp = array[i];
    //     for(let j = i+1; j<length; j++){
    //         if(array[j] < array[min]) {
    //         min=j;
    //             }
    //     }
    //     array[i] = array[min];
    //     array[min] = temp;

    // }
    return array; 
    
}

console.log(selectionSort(numbers));
console.log(numbers);