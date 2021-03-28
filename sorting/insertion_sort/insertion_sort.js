const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 0; i < array.length; i++){
        element = array[i];
        array.splice(i, 1);
        for (let j = i; j >= 0; j--) {
            if (element < array[j]){
                array.splice(j,0,element);
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);