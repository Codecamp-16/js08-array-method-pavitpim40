/* 
วิธีสร้าง function มี 2 วิธี

1.Function Declaration
Syntax : function <name> () {}

2.Function Expression (Function as a Data)
Syntax : const <name> = function () {}

*/

/*
Input : Parameter,Argument 
Type of Input : number, string, boolean,null, undefined, array, object, function
*/

// ### Function as a Data

// variable = <data>
let a = 5;
let b = 'Codecamp';
let c = true;
let d = null;
let e = undefined;
let f = [1, 2, 3, 4];
let g = {
  name: 'John',
};

let func = function () {
  console.log('do something');
};

// ### Function as a Parameter

// function add(x, y) {
//   return x + y;
// }

// #### Function as a Input

// function as a input
function caraBowBand(music) {
  console.log('กัญชา');
  console.log('บัวลอย');
  console.log('เจ้าตาก');
  console.log('เพลงที่ขอ :', music);
}
// function as a input
function paradoxBand(music) {
  console.log('เพลงที่ขอ :', music);
  console.log('ฤดูฝน');
  console.log('ผงาดง้ำค้ำโลก');
  // console.log('ฤดูหนาว');
  // console.log('ลื้อดูร้อน');
}
// Higher order Function (Callback function)
// function as a parameter อาจจะไม่ได้ถูกเรียกใช้ทันที => Callback (เรียกใช้ทีหลัง)
function LenYaiPub(time, band_1, band_2) {
  // Activity
  if (time == '19.00') {
    console.log('playlist ของร้าน');
  }
  if (time == '21.00') {
    let music = 'เพลงชาติ';
    band_1(music);
  }
  if (time === '23.00') {
    let music = 'Happy BirthDay';
    band_2(music);
  }
}
LenYaiPub('23.00', paradoxBand, caraBowBand);

// Example-2
// as a parameter
function print(value) {
  alert(value);
}

// // Higher Order function
function square(n, showResult) {
  let result = n ** 2; // 25
  // execute print function
  showResult(result); // print(25)
  //
  return result;
}

// square(5, print);
