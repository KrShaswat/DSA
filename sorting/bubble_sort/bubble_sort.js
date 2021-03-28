const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(n) {
    [numbers[n], numbers[n-1]] = [numbers[n-1], numbers[n]];
}

function bubbleSort(array) {
    let swapped = true;
    while(swapped){
        swapped = false;
        for (let i =1; i<array.length; i++){
            if (array[i]<array[i-1]){
                swap(i);
                swapped = true;
            }
        }
    }

    // andrei's solution
    // const length = array.length;
    // for (let i = 0; i<length; i++){
    //     for (let j = 0; j < length; j++) {
    //         if (array[j] > array[j+1]) {
    //             let temp = array[j];
    //             array[j] = array[j+1];
    //             array[j+1] = temp;
    //         }
            
    //     }
    // }
}

bubbleSort(numbers);
console.log(numbers);