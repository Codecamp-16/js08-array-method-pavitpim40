// จงหา element ตัวแรก  (array.find)
// ใน inventory ที่มี name เท่ากับ cherries

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
];

function search(element) {
  // #1
  console.log('ELEMENT', element);

  // #2
  // ********* Return True เมื่อเจอของ
  if (element.name === 'bananas') return true; // ✅

  // if (element.name === 'cherries') return element; //❌
}

// const foundedItem = inventory.find(search);

// Short
// const foundedItem = inventory.find((e) => e.name === 'cherries');
// 1st ({ name: 'apples', quantity: 2 }) => 'apples === 'cherries' // false
// 2nd ({ name: 'bananas', quantity: 0 },) => 'bananas' === 'cherries' // false
// 2nd ({ name: 'cherries', quantity: 5 }) => 'cherries' === 'cherries' // true

const foundedItem = inventory.find((e) => e.quantity === 0);
console.log('FOUNDED-ITEM', foundedItem);
