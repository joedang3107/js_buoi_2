// alert('hello')

// do {
//         let number = window.prompt("Enter number", 1);
//         inputnumber = Number(number);
//     } while (Number.isNaN(inputnumber))
//     let check = true;
//     while (inputnumber>0) {
//         if ((inputnumber % 10) % 2 == 0) {
//             check = false;
//             break;
//         }
//         inputnumber=inputnumber/10;
//     }
//     if (check == true) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }

// DOM 
let h3 = document.getElementById('js-first-title')
// let h3 = document.getElementsByClassName('js-first-title')[0] // phần tử đầu tiên

let containerElement = document.getElementById('js-container')

// chỉnh sửa style
h3.style.color = 'red'

// classlist
h3.classList.add('bg-color')

setTimeout(() => {
    h3.classList.remove('bg-color')
}, 3000);

// append class
let pElement = document.createElement('p')
pElement.innerText = 'Description'
containerElement.appendChild(pElement)

// Evene Listener
let btnClick = document.querySelector('.js-click-button')
btnClick.addEventListener('click', userClick)

function userClick() {
    alert('hi')
}

//bài tập đồng hồ chạy
let clockElement =  document.querySelector('.js-clock')
let timerElement = clockElement.querySelector('.js-clock-timer')

let timerInterval = setInterval(() => {
    timerElement.innerText = new Date().toLocaleTimeString()
}, 1000);

// dừng đồng hồ
setTimeout(() => {
    //stop clock
    clearInterval(timerInterval) // xóa Interval()
}, 10000);



// Numbers
let myNumber = 31.7
console.log('isInterger: ', Number.isInteger(Number.parseInt(myNumber)));
console.log('Convert to string: ', myNumber.toString());

//random
function getRandom(max) {
    return Math.floor(Math.random() * max)
}
console.log('random', getRandom(10));


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min 
   
    
}

console.log('random(5,35)', getRandomNumber(5,6));

