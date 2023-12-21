//ให้เพิ่ม mazda bmw และ nissan เข้าไปใน cars โดยให้อยู่ข้างหลัง honda
const cars = ['volvo', 'toyota', 'honda', 'ford'];

const foundIndex = cars.indexOf('honda');
if (foundIndex !== -1) {
  cars.splice(foundIndex, 0, 'mazda', 'bmw', 'nissan');
}
