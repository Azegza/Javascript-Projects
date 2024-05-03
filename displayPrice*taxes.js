// Display Prices after taxes in Js with Classes / constractors

function Product(name,price){ // 
  this.name = name;
  this. price = price;
this.displayProduct = function (){
  console.log(`Product: ${this.name}`);
  console.log(`Price: $${this.price.toFixed(2)}`);
};
  this.calculateTotal = function (tax){
  return this.price + (this.price * tax);
  };
}
  const tax = 0.05;
const product1 = new Product("Shirt", 19.99);
const totalPrice = product1.calculateTotal(tax);
console.log(`Total price after tax : $${totalPrice.toFixed}`);
