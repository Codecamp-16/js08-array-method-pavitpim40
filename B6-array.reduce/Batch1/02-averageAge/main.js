let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

/*
	AVERAGE NUMBER 

	PSEUDO-CODE
	- CALC : ผลรวม
	- CALC : จำนวนคน
	- CALC AVG : ผลรวม / จำนวนคน
*/

// arr = Array<{name:string,age:number}>
// current = obj = {name:string,age:number}
// let sum = arr.reduce((a, obj) => a + obj.age, 0);
// let length = arr.length;
// let average = sum / length;
// console.log(getAverageAge(arr));

function getAverageAge(array) {
  let sum = array.reduce((a, obj) => a + obj.age, 0);
  let length = array.length;
  let average = sum / length;
  return +average.toFixed(2);
}

let result = getAverageAge(arr);
console.log(result);
