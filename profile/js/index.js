function callApi(url) {
  return new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      resolve(this.responseText);
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}
let url = "info.json"
let nameElem = document.querySelector(".js-name")
let birthdayElem = document.querySelector(".js-birthday")
let phoneElem = document.querySelector(".js-phone")
let mailElem = document.querySelector(".js-mail")
let addressElem = document.querySelector(".js-address")
let aimElem = document.querySelector(".js-aim")
let softskillsElem = document.querySelector(".js-softskills")
let graduateElem = document.querySelector(".js-graduate")
let scoreElem = document.querySelector(".js-score")
let experienceElems = document.querySelectorAll(".js-experience")
let hobbysElem = document.querySelector(".js-hobbys")

callApi(url).then((dataText) => {
  let data = JSON.parse(dataText);
  let myData = data[0];
  nameElem.innerText = myData.Name
  birthdayElem.innerText = myData.Birthday
  phoneElem.innerText = myData.Phone
  mailElem.innerText = myData.Mail
  addressElem.innerText = myData.Address
  aimElem.innerText = myData.Aim
  // kỹ năng mềm
  softskillsElem.innerHTML = `<li>${myData.Softskills[0]}</li> <li>${myData.Softskills[1]}</li> <li>${myData.Softskills[2]}</li> `
  // graduate
  graduateElem.innerText = myData.Graduate
  // điểm số
  scoreElem.innerText = myData.Score
  // kinh nghiệm làm việc
  Array.from(experienceElems).forEach((experienceElem)=>{
    experienceElem.innerText = myData.Experience
  })
  // Sở thích
  hobbysElem.innerHTML = `<li>${myData.Hobbys[0]}</li> <li>${myData.Hobbys[1]}</li> <li>${myData.Hobbys[2]}</li> `
});


var a = 1; 
console.log(a++);
console.log(a);