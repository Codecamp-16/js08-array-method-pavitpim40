// จงหา index ใน tasks ที่มี id เท่ากับ 2
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

function search(item) {
  console.log(item.id);
  // if (item.id == 2) return true;
  if (item.name === 'Swimming') return true;
}

const foundedIndex = tasks.findIndex(search);
console.log('FoundedIndex', foundedIndex);
