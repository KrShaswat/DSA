// Ideally cache should be inside the function
// let cache = {};

function memoizedAdd80 (n) {
    // Cache will be reset everytime we run a function
    let cache = {}
    // To solve the  above mentioned problem we can use closers
    // i.e a function that returns a function
    return function(n) {
        if (n in cache) {
            return cache[n]
        } else {
            console.log("Long time");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
// the log will give the function as memoizedAdd80 gives a fucntion in return
console.log('1', memoizedAdd80(5));
console.log('2', memoizedAdd80(5));

// To use closures

const memoized = memoizedAdd80();

console.log('1', memoized(5));
console.log('2', memoized(5));

