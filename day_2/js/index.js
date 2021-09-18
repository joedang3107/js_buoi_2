// if else
// function heavyCaculate() {
//   console.log("Heavy caculate");
// }

// let month = 2;
// if (month >= 1 && month <= 3 && heavyCaculate()) {
//   console.log("Spring");
// } else if (month >= 4 && month <= 6) {
//   console.log("Summer");
// } else if (month >= 7 && month <= 9) {
//   console.log("Fall");
// } else if (month >= 10 && month <= 12) {
//   console.log("Winter");
// } else {
//   console.log("Month does not exsist");
// }

// switch case

// let gender = 'girl';

// switch (gender) {
//     case 'girl':
//         console.log("girl")
//         break
//     case 'boy':
//         console.log("boy")
//         break
//     case 'bisexual':
//         console.log("bisexual")
//         break
//     case 'other':
//         console.log("other")
//         break
//         default: 
//         console.log('Can\'t define your gender');
// }

// for
// let n = 100
// let counter = 0
// for (let index = 1; index <= n; index++) {
//     console.log('chay 100m: ', index);
//     // for (let j = 1; j < n; j++) {
//     //     console.log('nang ta: ', j);
//         counter++
//     // }
// }
// console.log('counter: ', counter);

// let x = 3

// let numbers = [1,3,5,7,12]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == x) {
//         console.log('tim x: ', x);
//         break;
//     } 
//     console.log('step: ', i);
// }

// while
// let numbers = [1, 2, 3, 4];
// let x = 2;
// let i = 0;
// while (i < numbers.length) {
//   if (numbers[i] == x) {
//     console.log("tim x: ", x);
//     break;
//   }
//   console.log("step: ", i);
//   i++;
// }

// let counter = 0 
// setInterval(() => {
//   console.log('counter: ', counter);
//   counter++
// }, 1000)

// let inputNumberStr = window.prompt('enter a number: ', 0)
// let inputNumber = Number(inputNumberStr)
// // console.log(inputNumber);

// while (Number.isNaN(inputNumber)) {
//     let inputNumberStr = window.prompt('enter a number: ', 0)
//     inputNumber = Number(inputNumberStr)
// }
// console.log('inputNumber: ', inputNumber);
// // // do while
// let n = 2;
// do {
//   console.log(n);
//   n++;
// } while (n > 3);

// // check Prime number
let counter = 2;
let inputNumber = 10006;
for (let i = 1; i < inputNumber; i++) {
  if (inputNumber % i === 0) {
    counter++;
  }
}
console.log("counter: ", counter);
if (counter === 2) {
  console.log(inputNumber, "is prime");
} else {
  console.log(inputNumber, "is not prime");
}

// function
// function enterNumber(min) {
//   do {
//     let inputNumberStr = window.prompt("enter a number: ", 0);
//     inputNumber = Number(inputNumberStr);
//   } while (Number.isNaN(inputNumber) || inputNumber < 6);
//   console.log("inputNumber ", inputNumber);
//   return inputNumber
// }
// let number = enterNumber(6)
// console.log('number: ', number);

let student = {
  mark:5,
  body: {
    arm: {
      length: 10, 
      width:5
    },
    belly:100,
  }
}

let changeStudentMarks = function (student) {
  student.mark = 10
  console.log('mark: ', student.mark);
}
changeStudentMarks(student)

let total = (k, ...rest) => {
  console.log('rest:', rest);
  let result = 0
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] >k)
      result += rest[i]
  }
  return result
}
let k = 2
let totalResult = total(k,1,2,3,'5',5,6)
console.log('total:', totalResult);

