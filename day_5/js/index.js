// // declare
// let fruitNames = [
//     'orange', 'banana', 'kiwi', 'apple'
// ]

// console.log(fruitNames, fruitNames.toString());
// console.log('last value: ',fruitNames[fruitNames.length - 1]);

// for (let i = 0; i < fruitNames.length; i++) {
//     console.log(fruitNames[i]);

// }
// fruitNames.forEach((fruitNames, index) => {
//     console.log(fruitNames, index);
// })

// // stack (push & pop - lifo (last in first out))
// let students = []

// let studentA = {
//     name: 'A',
//     age: 24
// }
// let studentB = {
//     name: 'B',
//     age: 24
// }

// students.push(studentA)
// students.push(studentB)
// students.push({
//     name: 'Zee',
//     age: 24
// })

// // let studentZee = students.pop()
// // console.log(studentZee);
// console.log(students);

// // queues (push & shift - fifo(first in first out))
// // shift
// studentA = students.shift()

// console.log(students);
// // unshift (append at the begining)
// students.unshift(studentA)

// console.log(students);

// // studentA = students.shift()
// // console.log(students);

// // splice - handle with middle array (chọn vị trí remove, số phần tử muốn remove, phần tử muốn thêm)
// students.push({
//     name: 'E',
//     age : 25
// })
// students.splice(2,0,{name: 'C', age:25}) // thêm object
// students.splice(3,1,{name: 'D', age:25}) // thêm object
// console.log(students);

// reverse
// console.log('reverse: ', students.reverse());

// join
// console.log('join(): ',fruitNames.join(' '));
// bài tập 21 - 33

// sort students by name

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  console.log(items);
// sort by numbers
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
