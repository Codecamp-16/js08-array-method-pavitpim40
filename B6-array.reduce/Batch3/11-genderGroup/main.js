//จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

// input : Array<Person> : Array<{name:string, sex: enum("F"|"M")}>
// output : Object : {enum("F" | "M") : Array<name:string>}

function reducerFN(accObj, personObj) {
  // console.log(personObj);

  /*
		PSEUDO-CODE
		 - รู้ personObj  ==  { name: 'John', sex: 'M' }
		 - CHECK เพศ 
		 - IF เป็นเพศชาย
		 		- เอาแค่ name ไป push ใส่ array ในkey "M"
		 - ELSE เป็นเพศหญิง
		 		- เอาแค่ name ไป push ใส่ array ในkey "F"
	*/
  // if (personObj.sex === 'M') {
  //   accObj['M'].push(personObj.name);
  // } else if (personObj.sex == 'F') {
  //   accObj['F'].push(personObj.name);
  // }
  const SEX = personObj.sex;
  accObj[SEX].push(personObj.name);

  return accObj;
}

const result = persons.reduce(reducerFN, { F: [], M: [] });

console.log(result);
