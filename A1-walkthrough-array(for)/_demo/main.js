let str = 'Hello';
let arr = ['Apple', 'Orange', 'Pear'];

for (let item of str) {
  console.log(item);
}

// For
for (let i = 0; i < arr.length; i++) {
  console.log(i);
}

// For of (Element)
for (let item of arr) {
  console.log(item);
}

// ในJS มอง Array เป็น Object ประเภทหนึ่ง
/* Array likes Object
const arr = {
  '0' : "Apple",
  "1" : "Orange",
  "2" : "Pear"
}

*/
// For in (Index)
for (let index in arr) {
  console.log(index);
}
