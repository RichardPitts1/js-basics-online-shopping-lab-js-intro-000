
var cart = [];
 var numbers = []
 var sum = 0

function getCart() {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let min = 1
  let max = 100
  let random = Math.floor(Math.random() * (max - min)) + min
  
   var itemHash = {
     itemName: item,
     itemPrice: random
   }
   
   cart.push(itemHash)
   return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

// function viewCart() {
//   if (cart.length === 0) {
//     return `Your shopping cart is empty.`
//   } else {
//     var cartItems = []
    
//     var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    
//     for(var i = 0; i < cart.length - 1; i++){
//       cartItems.push(
//         `${cart[i].itemName} at $${cart[i].itemPrice}`
//       )
//     }
//     return `In your cart, you have ${cartItems.join(', ')}, and ${last}`
//   }
// }



//   if (cart.length === 0) {
//     return `Your shopping cart is empty.`
//   } else {
//     var cartItems = []
    
//     var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    
//     for(var i = 0; i < cart.length - 1; i++){
//       cartItems.push(
//         `${cart[i].itemName} at $${cart[i].itemPrice}`
//       )
//     }
//     return `In your cart, you have ${cartItems.join(', ')}, and ${last}`
//   }
// }





function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var myString = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return myString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}




function total(){
  let numbers = []
  let sum = 0 
  
  for (var i = 0; i < cart.length; i++) {
    numbers.push(cart[i].itemPrice)
    sum += numbers[i]
  }
  return sum
}

function removeFromCart(item) {
  const itemName = []
    
  for(var i = 0; i < cart.length; i++){
    itemName.push(cart[i].itemName)
    }
    
  const index = itemName.indexOf(item)
  
  if(index > -1){
     cart.splice(index, 1)
     return cart
  } else {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const total1 = total()
    cart = []
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
  }
}



var cart = [];

function addToCart (item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


addToCart('glove')
addToCart('ball')
addToCart('skis')
addToCart('shoes')

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(printOneItem)

  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    console.log(printTwoItems)
  
    
  } else {
      for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
          }
          var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
          console.log(printThreeOrMoreItems)
  }
}
viewCart(cart)


function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0
  
  for(var i = 0; i < cart.length; i++) {
  var itemPrice = cart[i][Object.keys(cart[i])]
    pricePerItemInCart.push(itemPrice)
    }
  
  for (var j =0; j<pricePerItemInCart.length; j++) {
    totalPrice = pricePerItemInCart[j]+=totalPrice
  }
  return totalPrice
}
total(cart)

function removeFromCart(item) {
  for (var i = 0; i <cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    } 
  }
  console.log('That item is not in your cart.')
  return cart
}

removeFromCart('skis')
  
  
  
function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
    } 
    } else 
      console.log('Sorry, we don\'t have a credit card on file for you.')
return cart;
  }

placeOrder()

>>>>>>> 7b808d9be20fd8a6bec6eadf933ad418ef9d336a
