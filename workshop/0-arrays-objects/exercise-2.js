// Exercise 2
// -------------------
const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

// You have two arrays above of people who arrived late to your party and
// people who arrived early.
// Create a new array that holds all of the party attendees and

// Write a program that will do the following:
// Output them in a tidy list from first to last arrival the console.

// NO for loops!

let listOfGuests = earlyBirds.concat(lateComers);
// This adds the second array at the end.

listOfGuests.forEach(function (item, id) {
  let x = id + 1;
  console.log(x + ': ' + item);
});
//   Using for each to console log each item with their indices.
