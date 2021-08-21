
let burgerPrice = 2;

function calcOrder() {
  let extra = parseFloat(document.querySelector('[name=extra]:checked').value, 10);
  let sauce = parseFloat(document.querySelector('#sauce').value, 10);
  let quantity = parseInt(document.querySelector('#quantity').value, 10);
  let total = (burgerPrice + extra + sauce) * quantity;
  document.querySelector('#totalPrice').innerHTML = total;
}

function validateForm() {
  let quantity = parseInt(document.querySelector('#quantity').value, 10);
  quantity = isNaN(quantity) ? 0 : quantity
  let name = document.querySelector('#name').value.trim();
  let email = document.querySelector('#email').value.trim();
  let address = document.querySelector('#address').value.trim();
  if (!name) {
    alert('Please enter your name!');
  } else if (!email || !(email.indexOf("@") > 0) || !(email.indexOf(".") > 0)) {
    alert('Please enter a valid e-mail address!');
  } else if (address.length < 10) {
    alert('Please enter a valid delivery address!')
  } else if (quantity < 1 || quantity > 10) {
    alert('Your can only 1 to 10 burgers!');
  } else {
    calcOrder();
  }
}

