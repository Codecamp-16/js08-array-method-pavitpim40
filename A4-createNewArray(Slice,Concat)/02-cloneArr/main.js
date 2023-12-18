// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

function clone(arr) {
  // #1
  const cloneArr = [];
  for (let item of arr) {
    cloneArr.push(item);
  }

  return cloneArr;

  // #2
  return arr.slice();
}
