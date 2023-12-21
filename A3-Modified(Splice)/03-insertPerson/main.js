// ให้เขียนโค้ดเพื่อลบ Jay ออกและใส่ Jack และ Joe เข้าไปแทน

const person = ['John', 'Jay', 'Jim', 'Jame'];

let foundIndex = person.indexOf('Jay');
if (foundIndex !== -1) {
  person.splice(foundIndex, 1, 'Jack', 'Joe');
}
