/*Example 2 - Object.values() method

We have an object that stores our team salaries. Write code for
summing all salaries and store the result in the sum variable. Should
get 390. If the `salaries` object is empty, then the result should be 0.
*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

/*
  ^for...in
*/
let sum = 0;

for (const key in salaries) {
  sum += salaries[key];
}

console.log(sum);



/*
  ^for...of --> pentru keys
*/
// const keys = Object.keys(salaries);
// let sum = 0;

// for (const key of keys) {
//   sum += salaries[key]
// }

// console.log(sum);



/*
  ^for...of --> pentru values
*/
// const values = Object.values(salaries);
// let sum = 0;

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);