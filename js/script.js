const totalSpent = 550;
let payment = 7000;
let discount = 0;
if (totalSpent < 100) {
  discount = 0;
  console.log(`Not a partner, discount 0%`);
} else if (totalSpent < 1000) {
  discount = 2;
  payment = payment * 0.98;
  console.log(`Bronze partner, discount 2%`);
} else if (totalSpent < 5000) {
  discount = 5;
  payment = payment * 0.95;
  console.log(`Silver partner, discount 5%`);
} else {
  discount = 10;
  payment = payment * 0.9;
  console.log(`Golden partner, discount 10%`);
}
console.log(`We're creating booking on amount of ${payment} with the discount of ${discount}%`);
