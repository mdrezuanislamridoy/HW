const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const inputBox = document.getElementById("inputBox");
const addToCart = document.getElementById("add-to-cart");
const cartValue = document.getElementById("cartValue");

let quantity = 0;

function quantityValue() {
  inputBox.value = quantity;
}

minus.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityValue();
  }
});
plus.addEventListener("click", () => {
  quantity++;
  quantityValue();
});

addToCart.addEventListener("click", () => {
  if (quantity > 0) {
    alert(`${quantity} items added to the cart!`);

    quantity = 0;
    quantityValue();
  } else {
    alert("Please select at least one item.");
  }
});
