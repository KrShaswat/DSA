
// loop
function reverse1(string) {
    var rev_string = [];

    for (let index = 0; index < string.length; index++) {
        rev_string = string[index] + rev_string;
        // console.log(rev_string);
    }
    // console.log(rev_string);
    return rev_string;
}

var string = "da fuc u doing?";
console.log(reverse1(string));
var backward = [];


// built in or language solution
function reverse2(string) {
    return string.split("").reverse().join('');
};

console.log(reverse2(string));

// es6 elegance

// const reverse3 = string => string.split('').reverse().join('');
const reverse3 = string => [...string].reverse().join('');

console.log(reverse3(string));