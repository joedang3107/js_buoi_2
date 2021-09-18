// String methods

//toUpperCase

let studentName = 'Thien'
studentName.toLowerCase()
console.log(studentName);// không thể thay đổi giá trị của string
console.log(studentName.toLowerCase());
console.log(studentName[0]);

studentName[0] = 'P'
console.log(studentName);


// normalize user name

try {

let title = 'today is very beautiful'

console.log(title.indexOf('beautiful'));

let today = title.slice(0,5)
console.log(today);
let is = title.substring(6,8)
console.log(is);
let very = title.substr(9, 4)
console.log(very);

// replace
// concat - nối string
console.log(today.concat(is).concat(very));

// convert title to 'today is very awesome'

// let title2 = 'today is very awesome'

// bài tập: nối string ko dùng replace

// lặp qua từng string và thay thế string cần thay

// let words = title.split(' ')
// words.forEach((word, index) => {
//     if(word === 'beautiful') {
//         words[index] = 'awesome'
//     }
// })
// words.join(' ')

// console.log(title.split(' ').map(word => word === 'beautiful' ? 'awesome' : word).join(' '));

// cộng 3 phần của chuỗi đó lại với nhau
function replace (str, oldStr, newStr) {
    let pos = str.indexOf(oldStr)
    return str.slice(0, pos) + newStr + str.slice(pos + oldStr.length)
}

console.log(replace(title, 'beautiful', 'awesome'));

// replace

console.log(title.replace('beautiful', 'awesome'));
console.log(title.split(/(\d)/));

} catch (err) {
    console.log(err);
}

console.log('main thread');

// OOP - Object Oriented Programming
// Class
// Tính kế thừa
class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    go = () => {
        console.log(this.name + ' is going!!!');
    }
 }

class Student extends Person {
    constructor (name, age) {
        super(name, age)

        // this.go = this.go.bind(this) // đây là 1 cách để bind cho method go
    }
    // name = ''
    study = () => {
        console.log(this.name + ' is studying');
    }// dung arrow fn ko phải bind lại cho method

    go = () => {
        console.log(this.name + ' don\'t go');
    }
}
class Teacher extends Person {
    static ID = 100;
    constructor (name, age) {
        super(name, age) // gọi đến class  mà nó kế thừa
        // this.go = this.go.bind(this) // đây là 1 cách để bind cho method go
    }
    // name = ''
    study = () => {
        console.log(this.name + ' is studying');
    }// dung arrow fn ko phải bind lại cho method
}

let aTeacher = new Teacher('John', 30)
let studentThien = new Student ('Thien', 25)
let studentDuc = new Student ('Duc', 21)

studentThien.name = 'Thien'
studentDuc.name = 'Duc'
console.log(studentThien);
console.log(studentDuc);

studentThien.study()
studentDuc.study()

studentDuc.go()

let studentDucGo = studentDuc.go
studentDucGo()


console.log(aTeacher);
console.log(Teacher.ID);