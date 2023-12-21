/*
- จงเขียนฟังก์ชัน deleteTask(id) 
- เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
- execute deleteTask(1)
*/

/*
 PSEUDO-CODE
 -	หาของ ที่ id == 1
 - ถ้าเจอ 
		- ลบออกจาก array

*/
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];
// tasks = Array<{id:number, name:string}>
// const foundIndex = tasks.findIndex((obj) => obj.id == 3);
// console.log('fondedIndex', foundIndex);

// if (foundIndex !== -1) {
//   tasks.splice(foundIndex, 1);
// }
// console.log(tasks);

/* 
สำหรับหลายกรณี
*/
function deleteTodoById(todoId) {
  const foundIndex = tasks.findIndex((obj) => obj.id == todoId);
  console.log('fondedIndex', foundIndex);

  if (foundIndex !== -1) {
    tasks.splice(foundIndex, 1);
  }
  console.log(tasks);
}

deleteTodoById(1);
deleteTodoById(2);
deleteTodoById(3);
