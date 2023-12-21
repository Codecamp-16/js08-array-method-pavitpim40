// จงนับชื่อที่ปรากฏใน names

// ```js
let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// // expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
// ```

// input : Array<string>
// output : { [name:string] : number}

function reducerFn(acc, person) {
  // acc == obj
  /*
	PSEUDO-CODE 
		- รู้ชื่อคน (iterate person) #### ex. "Jack"
		- เช็คว่ามีชื่อคนนั้น อยู่ใน object หรือยัง
		- IF ชื่อคนนั้นยังไม่อยู่ใน Object ####  ex. acc = { }
				- เพิ่มชื่อคนนั้นเป็น key  
				- กำหนด value เป็น 1 #### acc = {"Jack": 1}
		- ELSE IF ถ้ามีอยู่ใน object อยู่แล้ว
				- แก้ไข value ให้เพิ่มขึ้น 1  ### acc = {"Jack": 2}
	*/

  // #1
  // if (!acc[person]) {
  //   acc[person] = 1;
  // } else if (acc[person]) {
  //   // acc[person] = acc[person] + 1;
  //   acc[person]++;
  // }
  // return acc;
  // console.log(!acc[person] ? (acc[person] = 1) : (acc[person] = acc[person] + 1));
  acc[person] = acc[person] ? acc[person] + 1 : 1;
  return acc;
}
const result = names.reduce(reducerFn, {});

console.log(result);
