// javascript advance

// let var const

const PI = 3.14; // gán giá trị ngay tại thời điểm khai báo
console.log(PI);

// arguments

function sum() {

  
    let total = Array.from(arguments)
    console.log(total);
    return total.reduce((sum, next) => sum + next)
}



console.log(sum(1, 2, 3, 4, 5));

// call, bind, apply

function say (saySomething) {

    console.log(this.name + saySomething);

}

let person = {
    name: 'Thien '
}
say.call(person, 'say hello')
say.call(person, ['say hello'])

// closure

function generateId() {
    let ID = 0 // chỉ fn ở dưới mới có thể thay đổi giá trị này
    return function () {
        return ++ID
    }
}
let genId = generateId()
console.log(genId(), genId());
console.log(genId(), genId());

// import - export 

import say2, { sayHello } from "./functions.js";

say2() // default
sayHello()
