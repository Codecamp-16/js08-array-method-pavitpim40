// ให้เขียนฟังก์ชัน squareArr(arr)
// เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]

/*
- walk through array
- sqaure 
- create New Array 

*** PSUEDO CODE ****

SET new empyty array 
FOR สมาชิกแต่ละตัว
  - เอามายกกำลังสอง
  - PUSH เข้าไปใน new array 
RETURN new array
*/
const arr = [2, 3, 5, 7, 11];

// let resultArr = []

// for(let i = 0; i < arr.length;i++) {
//   let num = arr[i]
//   let square = num ** 2
//   resultArr.push(square)
// }

// resultArr

function sqaureArr(array) {
  let resultArr = [];

  // for(let i = 0; i < array.length;i++) {
  //   // let num = array[i]
  //   // let square = num ** 2
  //   resultArr.push(array[i] ** 2)
  // }

  for (let num of array) {
    resultArr.push(num ** 2);
  }
  return resultArr;
}

sqaureArr([2, 3, 5, 7, 11]);
sqaureArr([1, 2, 3, 4, 5, 6, 18]);
