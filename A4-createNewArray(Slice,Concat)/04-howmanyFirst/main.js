// จงสร้างฟังก์ชัน first(arr, n) ให้ return ค่าตามเงื่อนไขต่อไป
// case - 1 : n เป็น undefined หรือ 1 ให้ return element ตัวแรกของ arr
// <array>,<number> => <first element of array>

// case - 2 n มากกว่า 1 ให้ return ค่าเป็น array ที่มี element ของ arr n ตัวแรก
// <array>,<number> => <array slice n ตัว>

// 1 TEST-CASE (HARD CODE INPUT)
const arr = [1, 2, 3, 4, 5, 6];
const num = 3;

if (num == undefined || num == 1) {
  console.log(arr[0]);
} else if (num > 1) {
  console.log(arr.slice(0, num));
}

// Abstract to Function

// function first(arr, n) {
//   if (n == undefined || n == 1) {
//     return arr[0];
//   } else if (n > 1) {
//     return arr.slice(0, n);
//   }
// }

// Refactor
function first(arr, n = 1) {
  return n == 1 ? arr[0] : arr.slice(0, n);
}
