let car = {
    name: 'Fiat',
    model: 500,
    weight: 850,
    color: 'white',
    start: function () {
        console.log(car.name, 'start moving');
    }
}


// console.log('car.name: ', car.name);
// console.log('car[name]: ', car['name']);
car.start()
car.stop = function () {
    console.log(car.name, 'is stopping');
}
car.stop()

// for (let prop in car) {
//     if (typeof(car[prop]) != 'function') {
//         console.log('prop: ', prop, car[prop]);  
//     }
    
// }

// toán tử 3 ngôi
// function checkNumber (number) {
//     let  result = number % 2==0 ? 'Event' : 'Odd'
//     return result
// }
// console.log(checkNumber(5)); 

// window.name = 'Window'
// let drive = function () {
//     console.log(this.name + ' is driving');
// }
// drive()
// car.drive = drive
// car.drive()

let  car1 = {
    name: 'car1',
    run: function () {
        console.log(this.name + ' is running..');
    }
}

car1.run()

// let car2 = {
//     name: 'car2'
// }

// car2.run = car1.run.bind(car1)
// car2.run()

function start (carRun) {
    //fuel
    console.log('fueling the car1');
    //....
    carRun()
}
let carRun = car1.run.bind(car1) // bind chuyển this sang th car1 
carRun()

// start (car1.run)

// handle with data string object
let student = {
    name: 'Dang Huu Thien',
    age: 25,
    hand: {
        length: 10,
        width: 5
    },
    address: 'HN'
}
console.log(student, typeof(student));
let dataStudentStr = JSON.stringify(student)
console.log(dataStudentStr);

// copy 1 object
// deep copy: cop dc nhiều lớp
let studentCp = JSON.parse(JSON.stringify(student))
studentCp.name = 'Dat'
console.log(student);
console.log(studentCp);

// spread operator (hay dùng)
// Shadow copy
let studentCp2 = {
    ...student,
    hand: {
        // ...student.hand
    }
}
studentCp2.name = 'Change Name'



let studentCp3 = {}
Object.assign(studentCp3, student)
studentCp3.name = 'Student 3'

console.log(student, studentCp2);

// object destructering

// let age1 = student.age
// let nameAbc = student.name
// let addressing = student.address

let {age, name, address} = student

console.log(age, name, address);