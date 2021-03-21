const strings = ['a', 'b', 'c', 'd'];

// lookup a element

strings[1]; // O(1) // this will point towards second element of the array

// push and pop i.e add and remove respectively at at/from the last of the array

//push
strings.push('e'); //O(1)

//pop
strings.pop();

//unshift - adding a element at the start of the array

string.unshift('x'); // O(n) // beacuase it has to iterate over every element to adjust index

//splice - adding in between of an array

strings.splice(2, 0, 'alien') //O(n)

cosole.log(strings)
