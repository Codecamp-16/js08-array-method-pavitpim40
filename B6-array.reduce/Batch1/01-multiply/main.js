// จงหาผลคูณของ element ใน nums
const nums = [-3, 2, 11, -7, 4, 6];

// -3 * 2 * 11 * -7 * 4 * 6
// acc(1) * -3
// acc(1 * -3) * 2
// acc(1 * -3 * 2) * 11
// acc(1 * -3 * 2 * 11) * -7

// acc = 1
// 1st : acc * -3 ==> -3
// 2nd : acc * 2 => -6

let result = nums.reduce((acc, num) => acc * num, 1);
console.log(result);
