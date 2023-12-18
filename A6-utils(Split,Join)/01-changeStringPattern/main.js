const test_1 = 'background-color';
const test_2 = 'thailand-country-of-smile';

// Function Expression
const dashToCamel = function (str) {
  // PB-1 : Split
  const strArr = str.split('-');

  // PB-2 : Create NewString
  let resultStr = '';
  for (let i = 0; i < strArr.length; i++) {
    // console.log(i, strArr[i]);
    if (i == 0) {
      resultStr += strArr[i];
    } else {
      resultStr += strArr[i][0].toUpperCase() + strArr[i].slice(1);
      //strArr[i] == "color" => "C" +  "olor" => "Color"
    }
  }
  return resultStr;
};

console.log(dashToCamel(test_1));
console.log(dashToCamel(test_2));
