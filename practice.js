var thing1 = "ball";
var thing2 = "pencil";
var thing3 = "arrow";


var cart2 = [thing1, thing2, thing3];
var numbers = [];
var sum = 0;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function total() {
  
}

// If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.


function removeFromCart(cart, item) {
  i = 0;
  while (i < cart.length) {
    if (cart[i] == item) {
      cart.unshift[1]
  }
  return cart
  }
}

console.log(removeFromCart(cart2, thing1));
console.log(cart2);
