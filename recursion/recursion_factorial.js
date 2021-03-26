// rules for recursion
// 1. identify base case
// 2. identify return case
// 3. process to change every recurrence

function findFactorialRecursive(number) {

   
    if (number ===  1) {
        return 2;
    }

    return number*findFactorialIterative(number-1);
}

function findFactorialIterative(number) {
    // i = number;
    // let answer = 1;
    // for (i; i>0; i--) {
    //     answer *= i;
    // }

    let answer = 1;
    for (let i=2; i<=number; i++) {
        answer *= i
    }

    return answer;
} 

// test
console.log(findFactorialIterative(10));
console.log(findFactorialRecursive(10));
