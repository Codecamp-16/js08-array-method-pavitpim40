const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5

// Global
let lessThanZero = null;

// WalkThrough
for (let n of nums) {
  if (n < 0) {
    lessThanZero = n;
    break;
  }
}

lessThanZero;
