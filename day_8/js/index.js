// function hello () {
//     console.log('hello');
// }



// function say(callBack) {
//     callBack()
// }

// say(hello)

// function cookingRice() {
//     console.log('start cooking rice');
//     setTimeout(() => {
//         console.log('cook rice done');
//     }, 2000)
// }

// function cookingSoup() {
//     console.log('start cooking soup');
//     setTimeout(() => {
//         console.log('cook soup done');
//     }, 2000)
// }

// function cookingTofu() {
//     console.log('start cooking tofu');
//     setTimeout(() => {
//         console.log('cook tofu done');
//     }, 2000)
// }

// function cooking (cb1, cb2, cb3) {
//     cb1()
//     cb2()
//     cb3()
// }

// cooking(cookingRice, cookingSoup, cookingTofu)

// Promise

let buyPhoneSuccess = true;
let findLoverSuccess = true;
let buyHouseSuccess = true;
const buyNewPhoneCb = (resolve, reject) => {
  setTimeout(() => {
    if (buyPhoneSuccess) {
      resolve({ success1: true });
    } else {
      reject({ success: false });
    }
  }, 2000);
};

// console.log(buyNewPhone);

let findLoverCb = (resolve, reject) => {
  setTimeout(() => {
    if (findLoverSuccess) {
      resolve({ success2: true });
    } else {
      reject({ success: false });
    }
  }, 3000);
};

let buyHouseCb = (resolve) => {
  setTimeout(() => {
    if (buyHouseSuccess) {
      resolve({ success3: true });
    }
  }, 2000);
};

// buyNewPhone
//   .then((data) => {
//     console.log("buyNewPhone: ", data);
//     return new Promise(findLoverCb);
//   })
//   .then((data) => {
//     console.log("findLover: ", data);
//     return new Promise(buyHouseCb);
//   })
//   .then((data) => {
//     console.log("buyHouse: ", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("main thread");

// function findLover () {

// }
// const findLoverPromise = new Promise ((resolve, reject) => {

// })

// findLoverPromise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch ((err)=>{
//         console.log(err);
//     })

// async/ await

async function live() {
  try {
    let buyNewPhoneResult = await new Promise(buyNewPhoneCb);
    console.log(buyNewPhoneResult); // giá trị của resolve

    let findLoverResult = await new Promise(findLoverCb);
    console.log(findLoverResult);// giá trị của resolve

    let buyHouseResult = await new Promise(buyHouseCb);
    console.log(buyHouseResult);// giá trị của resolve
  } catch (error) {
    console.log(error); // bắt giá trị của reject
  }
}
live();

// async/ await in loops
let promiseFn = [buyNewPhoneCb, findLoverCb, buyHouseCb]

// async function doAllJob () {
//     for (let cb of promiseFn) {
//         const result = await new Promise (cb)
//         console.log(result);
//     }
// }
// doAllJob()

// recursive thay thế cho async await

// function doAllJob (fns) {
//     if (!fns || fns.length == 0) {
//         return
//     }
//     new Promise(fns[0]).then (data => {
//         console.log(data);
//         doAllJob(fns.slice(1))
//     })
// }

// doAllJob(promiseFn)