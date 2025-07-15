// let meatArr = ["beef","chicken","rabbit"]
// let vegetableArr = ["carrots","potatoes","lettuce"]

let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]


const [meatItem, ...remainingVegetablesArr] = vegetableArr;
meatArr = [...meatArr, meatItem];
vegetableArr = remainingVegetablesArr;

console.log(`Meat array: ${meatArr}`);
console.log(`Vegetables array: ${vegetableArr}`);
console.log(typeof(remainingVegetablesArr));