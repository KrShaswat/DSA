// Given a number N return the index value of the Fibonacci 
// sequence, where the sequence is: 

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of
// the 2 previous values, that means that for N = 5 -> 2+3

// return the index of the sequence for a number n
// so if n = 21 the fucntion will return 8


// run the fibonacci sequence till we get the number then return the index;



// all above assumptions were wrong Andrei wants us to give fibo number for a index;


function fibonacciIterative(n) { // O(n )
    // let index = 1;
    // let fibonacci_sequence = [0,1];
    // // runs till fibonacci sequence is not equal to number
    // while (fibonacci_sequence[index]!== n) { 
    //     fibonacci_sequence.push(fibonacci_sequence[index]+fibonacci_sequence[index-1]);
    //     index ++;
    //     // it will be a infinite loop if n is not in fibonacci sequence
    //     // this checks if n is smaller than the last value of the sequence, 
    //     // if yes, loop will kick outta function, and starts screaming null
    //     // but null aint his mommy, cruel world!
    //     if (fibonacci_sequence[index] > n) {
    //         return null;
    //     }
    // }
    // return index;

    // what Andrei wanted
    let fibonacci_sequence = [0,1];
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }
    for (let i=1; i < n; i++) {
        fibonacci_sequence.push(fibonacci_sequence[i] + fibonacci_sequence[i-1]);
    }
    return fibonacci_sequence.pop();

    
}

console.log(fibonacciIterative(8));
// let index = 1;
// let fibonacci_sequence = [0,1]
function fibonacciRecursive(n){ // O(2^n)
    // if (fibonacci_sequence[index] === n) {
    //     return index;
    // }
    // if (fibonacci_sequence[index]>n) {
    //     return null;
    // }
    // fibonacci_sequence.push(fibonacci_sequence[index]+fibonacci_sequence[index-1]);
   
    // index++;
    // return fibonacciRecursive(n);

    // SO WHAT ANDREI ACTUALLY ASKED ME TO DO.

    if (n<2) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(8)); 