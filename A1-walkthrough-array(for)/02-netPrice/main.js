// const sales = [{ price: 1000, discount: 0.1 }, { price: 500, discount: 0.05 }, { price: 100 }];

/*
const summary = [
  { netPrice: 900 }, 
  { netPrice: 475 },
  { netPrice: 100 }
];
*/

/* 
S1-UnderStand Problem
	- input : Array<object> : Array<{price:number,discount?:number}>
	- output : Array<object> : Array<{netPrice:number}>
S2-Explore Example

S3-Breaking Problem
	- Walk through Array (each Object)
	- Calc netPrice : discount = 1000 * 0.1 , netPrice = totalPrice - discount
	- CreateNewArray for netPrice

*****  PSEUDO-CODE *****
SET newArray
FOR แต่ละสมาชิกของ array (Object)
	- หา netPrice
	- สร้าง object ที่มี key {netPrice : ......}
	- push Object ลง newArray
RETURN newArray
*/

// helper function
function calNetPrice(price, discountRate = 0) {
  // let totalPrice = price - price * discountRate;
  let totalPrice = price * (1 - discountRate);
  return totalPrice;
}

const sales = [
	{ price: 1000, discount: 0.1 }, 
	{ price: 500, discount: 0.05 }, 
	{ price: 100 }
];

function calNetPriceOfCart(array) {
  let summarizeArray = [];
  for (let obj of array) {
    let netPrice = calNetPrice(obj.price, obj.discount);
    summarizeArray.push({ netPrice: netPrice });
  }
  return summarizeArray;
}

let result = calNetPriceOfCart(sales);
console.log(result);
