// let users = ["John","Jane"]
// users.indexOf("Jane")

// let users = [{id:1, name : "john"},{id:1, name : "jane"} ]
// users.indexOf({id:1, name : "john"})

let users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'jane' },
  { id: 3, name: 'noon' },
  { id: 4, name: 'bow' },
  { id: 5, name: 'jane' },
];

// // Fn Declaration (Hositing)
// function searchFunction(item) {
//     console.log("Searching at", item)
//   // ถ้าเจอของที่ต้องการให้ return true
//   if(item.name === "jane") return true
//   else return false // ไม่เจอ
// }

// Fn Expression (not Arrow)
// const searchFunction = function(item) {
//   if(item.name === "jane") return true
//   else return false // ไม่เจอ
// }

// Fn Expression (Arrow)
const searchFunction = (item) => item.name === 'jane';

// let fondedIndex = users.findIndex(searchFunction)
// console.log(fondedIndex) // -1, index

let foundedItem = users.find((item) => item.name === 'jane');
console.log(foundedItem); // undefined, item
