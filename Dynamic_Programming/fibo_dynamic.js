let calculation = 0;
let calculation_DP = 0;
function fibonacci(n) {
    calculation++;
    if (n<2) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        calculation_DP++;

        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            }
            cache[n] = fib(n-1) + fib(n-2);
            return cache[n];
        }
    }
}

const fasterFib = fibonacciMaster();
console.log('DP', fasterFib(10));
console.log('simple', fibonacci(10));

console.log('Calculation tally DP: ' + calculation_DP);
console.log('Calculation tally: ' + calculation);
