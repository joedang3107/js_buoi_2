// alert('hello')
// while 
let numbers = [1,2,3,4]
let x = 2
let i = 0
while (i < numbers.length) {
    if (numbers[i] == x) {
        console.log('tim x: ', x);
        break
    }
    console.log('step: ', i);
    i++
}

// do while
let n = 2
do {
    console.log(n)
    n++
} while (n > 3);

// check Prime number 
let counter = 3
let inputNumber = 10006
for (let i = 1; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
        counter++
    }
    
}
console.log('counter: ', counter);
if (counter === 2) {
    console.log(inputNumber, 'is prime');
} else {
    console.log(inputNumber, 'is not prime');
}

// function
function enterNumber () {
    do {
        let inputNumberStr = window.prompt('enter a number: ', 0)
        inputNumber = Number(inputNumberStr)
    } while ((Number.isNaN(inputNumber)));
    console.log('inputNumber ', inputNumber);
}