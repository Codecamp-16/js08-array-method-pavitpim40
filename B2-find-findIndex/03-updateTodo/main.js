/*
- จงเขียนฟังก์ชัน updateTask(id, newName) 
- เพื่อแก้ไขค่า element ใน tasks 
- ที่มี property ชื่อ id เท่ากับ id 
- แก้ไข property ชื่อ name ให้มีค่าเป็น newName
- execute updateTask(2, 'Travelling')
*/

const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

/*
	PSEUDO-CODE
	- หา Index 
	- ถ้าเจอของ (Index !== -1) 
			- EDIT ชื่อ Task
	- ถ้าไม่เจอ 
			- ไม่ต้อง Edit
*/

/*
	เขียนโค้ดที่ใช้ได้กับ 1 กรณีก่อน
	- id : 2
	- newTask : FinishTask
*/

// tasks = Array<{id:number,name:string}>

// const foundedIndex = tasks.findIndex((item) => item.id === 2);
// console.log('foundedIndex', foundedIndex);
// if (foundedIndex != -1) {
//   tasks[foundedIndex].name = 'Finish Task';
//   console.log(tasks[foundedIndex]);
// }

/*
	เขียนโค้ดที่ใช้ได้กับหลายๆกรณี (Abstraction)
	- id : รับ parameter ตัวที่ 1
	- newTask : รับ parameter ตัวที่ 2
*/

// function updateTask(id, newTask) {
//   const foundedIndex = tasks.findIndex((item) => item.id === id);
//   console.log('foundedIndex', foundedIndex);
//   if (foundedIndex != -1) {
//     tasks[foundedIndex].name = newTask;
//     console.log(tasks[foundedIndex]);
//   }
// }

function updateTask(id, newTask) {
  const foundedItem = tasks.find((item) => item.id === id);
  // foundedItem : {id:number,name:string} | undefined
  if (foundedItem) {
    foundedItem.name = newTask;
    console.log(foundedItem);
  }
}
updateTask(2, 'Drink Coffee');
updateTask(3, 'Drink Beer');
